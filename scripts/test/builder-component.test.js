const fs = require('fs')
const {
  readTemplateComponent,
  replaceComponent,
  fileExists,
  writeFile,
  createFolder,
  ATOMIC_DESING_TYPE,
  task,
  urlsTemplates,
  createComponent,
  // createComponent,
} = require('../Builder-component')

describe('Builder Component', () => {
  describe('give path exist', () => {
    it.only('should be return error', async () => {
      const path = './atoms'
      await expect(createFolder(path)).rejects.toBe(
        'Error: The directory exists'
      )
    })
  })
  describe('give readTemplateComponent', () => {
    it.only('should be return one file', async () => {
      for (const item of task) {
        const { url } = urlsTemplates[item]
        const files = await fs.promises.readFile(url, { encoding: 'utf8' })
        const readTemplate = await readTemplateComponent(url)
        expect(readTemplate).toEqual(files)
      }
    })
  })
  describe('given a phrase with Component replaceComponent', () => {
    it.only('should be return a phrase with Button ', async () => {
      const phrase =
        'The Componet is Blue, and new componet will be red, and shoud be atomic/Componet'
      const expected =
        'The Button is Blue, and new componet will be red, and shoud be atomic/Button'

      const result = await replaceComponent(phrase, 'Button')
      expect(expected).toStrictEqual(result)
    })
    it.only('should be return a phrase with atom ', async () => {
      const phrase =
        'The Componet is Blue, and new componet will be red, and shoud be atomic/Componet'
      const expected =
        'The Componet is Blue, and new componet will be red, and shoud be Atoms/Componet'
      const result = await replaceComponent(phrase, ATOMIC_DESING_TYPE.atom)
      expect(expected).toStrictEqual(result)
    })
  })
  describe('give one urlFile and data ', () => {
    it.only('should be create file component', async () => {
      const path = './scripts/test/component.js'
      const component = `testing:{test:'green'}`
      await writeFile(path, component)
      expect(await fs.promises.stat(path)).toBeTruthy()
      await fs.promises.rm(path, { force: true })
      writeFile(path, component).then(() => {
        expect(fs.existsSync(path)).toBeTruthy()
        fs.unlinkSync(path)
      })
    })
  })

  describe('give one nameComponent and one Type component', () => {
    it.only('should be create Component, Story, Styles and index in one folder component', async () => {
      const nameComponent = 'NewButtom'
      const path = `./atoms/${nameComponent}`
      if (fileExists(path)) await fs.promises.rmdir(path, { recursive: true })
      await createComponent('atom', nameComponent)
      expect(fileExists(path)).resolves.toBeTruthy()
      await fs.promises.rmdir(path, { recursive: true })
    })
  })
})
