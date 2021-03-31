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
    return templateComponent.replaceAll(
      /atomic/g,
      nameComponent.replace(/^./, nameComponent[0].toUpperCase())
    )
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

const fs = require('fs/promises')
const enquirer = require('enquirer')

const ATOMIC_DESING_TYPE = {
  atom: 'atoms',
  molecule: 'molecules',
  layout: 'layout',
}

async function constructComponent() {
  let { type } = await enquirer.prompt({
    type: 'select',
    name: 'type',
    message: 'What kind of component would you like to create?',
    choices: ['atom', 'molecule', 'layout'],
    initial: 'atom',
  })

  let { componentName } = await enquirer.prompt({
    type: 'input',
    name: 'componentName',
    message: 'What is the name of the new component?',
    validate(input) {
      if (!this.skipped && input.trim().length === 0 && input.trim() !== ',') {
        return 'Please, tell us what is the name of the new component. Try again!'
      }
      return true
    },
  })

  createComponent(type, componentName)
}

async function createComponent(type, componentName) {
  const mappedType = ATOMIC_DESING_TYPE[type]

  checkParams(type, componentName, mappedType)

  for (const item of task) {
    const { url, ext } = urlsTemplates[item]

    readTemplateComponent(url)
      .then((template) => replaceComponent(template, componentName))
      .then((templateModefy) => replaceComponent(templateModefy, mappedType))
      .then((newComponent) => {
        const dir = `./${mappedType}/${componentName}`
        createFolder(dir).then(() => {
          if (item === 'index') {
            writeFile(`${dir}/index.js`, newComponent)
          } else {
            writeFile(`${dir}/${componentName}.${ext}`, newComponent)
          }
        })
      })
      .then(() =>
        console.log(`created file ${mappedType} - ${componentName}.${ext}`)
      )
      .catch((error) => console.error(error))
  }
}

module.exports = {
  checkParams,
  readTemplateComponent,
  replaceComponent,
  createFolder,
  writeFile,
  ATOMIC_DESING_TYPE,
  createComponent,
  constructComponent,
  task,
  urlsTemplates,
}
