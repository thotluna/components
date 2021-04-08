const readTemplateComponent = async (urlTemplate) =>
  fs.readFile(urlTemplate, 'utf8')

const replaceComponent = async (templateComponent, nameComponent) => {
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
    const first = templateComponent.replaceAll(/Component/g, nameComponent)
    const lowerCase = nameComponent.replace(
      /^./,
      nameComponent[0].toLowerCase()
    )
    const two = first.replaceAll(/component/g, lowerCase)
    return two
  }
}

const fileExists = async (path) => !!(await fs.stat(path).catch(() => false))

const createFolder = async (dir) => {
  if (await fileExists(dir)) throw 'Error: The directory exists'
  fs.mkdir(dir, { recursive: true })
}
const writeFile = async (fileUrl, newComponent) =>
  fs.writeFile(fileUrl, newComponent, 'utf8')

const addComponentToIndex = async (path, name) => {
  const indexMessage = await fs.readFile('./index.js', { encoding: 'utf8' })
  const index = await fs.open('./index.js', 'w')
  const controller = new AbortController()
  const { signal } = controller
  const message = indexMessage.concat(
    `export { default as ${name} } from '${path}'\n`
  )
  const data = new Uint8Array(Buffer.from(message))
  await writeFile(index, data, { signal })
  controller.abort()
}

const task = ['component', 'css', 'story', 'index', 'constants']
const urlsTemplates = {
  component: {
    url: './template/component/Component.js',
    ext: 'js',
  },
  css: {
    url: './template/component/Component.module.css',
    ext: 'module.css',
  },
  story: {
    url: './template/component/Component.stories.js',
    ext: 'stories.js',
  },
  index: {
    url: './template/component/index.js',
    ext: 'js',
  },
  constants: {
    url: './template/component/constants.js',
    ext: 'js',
  },
}

const fs = require('fs/promises')
const enquirer = require('enquirer')

const ATOMIC_DESING_TYPE = {
  atom: 'atoms',
  molecule: 'molecules',
  layout: 'layout',
}

const constructComponent = async () => {
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

  const name = componentName.replace(/^./, componentName[0].toUpperCase())

  createComponent(type, name)
}

const createComponent = async (type, componentName, isTest = false) => {
  const mappedType = ATOMIC_DESING_TYPE[type]

  const path = `./${mappedType}/${componentName}`
  await createFolder(path)
  try {
    for (const item of task) {
      const { url, ext } = urlsTemplates[item]
      const template = await readTemplateComponent(url)
      const templateModify = await replaceComponent(template, componentName)
      const newComponent = await replaceComponent(templateModify, mappedType)
      if (item === 'index') {
        await writeFile(`${path}/index.js`, newComponent)
      } else if (item === 'constants') {
        await writeFile(`${path}/constants.js`, newComponent)
      } else {
        await writeFile(`${path}/${componentName}.${ext}`, newComponent)
      }
    }
    !isTest && addComponentToIndex(path, componentName)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  readTemplateComponent,
  replaceComponent,
  fileExists,
  createFolder,
  writeFile,
  ATOMIC_DESING_TYPE,
  createComponent,
  constructComponent,
  addComponentToIndex,
  task,
  urlsTemplates,
}
