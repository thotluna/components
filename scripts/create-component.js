const checkParams = (type, nameComponent, mappedType) => {
  if (!type || !nameComponent) {
    console.error(`Error: Place make sure you pass a type and a component name`)
    process.exit(1)
  }

  if (!mappedType) {
    console.error(
      `Error: the param type "${type}" is not valid. Use atom, molecule or layout `
    )
    process.exit(1)
  }
}

const readTemplateComponent = (urlTemplate) => {
  return fs.readFile(urlTemplate, 'utf8')
}

const replaceComponent = (templateComponent, nameComponent) => {
  if (
    nameComponent === 'atoms' ||
    nameComponent === 'molecules' ||
    nameComponent === 'layout'
  ) {
    return templateComponent.replaceAll(/atomic/g, nameComponent)
  } else {
    return templateComponent.replaceAll(/Componet/g, nameComponent)
  }
}

const createFolder = (dir) => {
  return fs.mkdir(dir, { recursive: true })
}

const writeFile = (fileUrl, newComponent) => {
  return fs.writeFile(fileUrl, newComponent, 'utf8')
}

const [, , type, nameComponent] = process.argv
const fs = require('fs/promises')

const ATOMIC_DESING_TYPE = {
  atom: 'atoms',
  molecule: 'molecules',
  layout: 'layout',
}
const mappedType = ATOMIC_DESING_TYPE[type]

const createComponent = (type, nameComponent) => {
  checkParams(type, nameComponent, mappedType)

  const task = ['component', 'css', 'story', 'index']

  const urlsTemplates = {
    component: { url: './template/component/Component.js', ext: 'js' },
    css: {
      url: './template/component/Component.module.css',
      ext: 'module.css',
    },
    story: {
      url: './template/component/Component.stories.js',
      ext: 'stories.js',
    },
    index: { url: './template/component/index.js', ext: 'js' },
  }

  for (const item of task) {
    const { url, ext } = urlsTemplates[item]

    readTemplateComponent(url)
      .then((template) => replaceComponent(template, nameComponent))
      .then((templateModefy) => replaceComponent(templateModefy, mappedType))
      .then((newComponent) => {
        const dir = `./${mappedType}/${nameComponent}`
        createFolder(dir).then(() => {
          if (item === 'index') {
            writeFile(`${dir}/index.js`, newComponent)
          } else {
            writeFile(`${dir}/${nameComponent}.${ext}`, newComponent)
          }
        })
      })
      .then(() =>
        console.log(`created file ${mappedType} - ${nameComponent}.${ext}`)
      )
      .catch((error) => console.error(error))
  }
}

createComponent(type, nameComponent)
