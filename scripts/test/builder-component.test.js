const fs = require('fs/promises')
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
    it('should be return error', async () => {
      const path = './scripts'
      await expect(createFolder(path)).rejects.toBe(
        'Error: The directory exists'
      )
    })
  })
  describe('give readTemplateComponent', () => {
    it('should be return one file', async () => {
      for (const item of task) {
        const { url } = urlsTemplates[item]
        const files = await fs.readFile(url, { encoding: 'utf8' })
        const readTemplate = await readTemplateComponent(url)
        expect(readTemplate).toEqual(files)
      }
    })
  })
  describe('given a phrase with Component replaceComponent', () => {
    it('should be return a phrase with Button ', async () => {
      const phrase =
        'The Componet is Blue, and new componet will be red, and shoud be atomic/Componet'
      const expected =
        'The Button is Blue, and new componet will be red, and shoud be atomic/Button'

      const result = await replaceComponent(phrase, 'Button')
      expect(expected).toStrictEqual(result)
    })
    it('should be return a phrase with atom ', async () => {
      const phrase =
        'The Componet is Blue, and new componet will be red, and shoud be atomic/Componet'
      const expected =
        'The Componet is Blue, and new componet will be red, and shoud be Atoms/Componet'
      const result = await replaceComponent(phrase, ATOMIC_DESING_TYPE.atom)
      expect(expected).toStrictEqual(result)
    })
  })
  describe('give one urlFile and data ', () => {
    it('should be create file component', async () => {
      const path = './scripts/test/component.js'
      const component = `testing:{test:'green'}`
      await writeFile(path, component)
      expect(await fs.stat(path)).toBeTruthy()
      await fs.rm(path, { force: true })
    })
  })

  describe('give one nameComponent and one Type component', () => {
    it('should be create Component, Story, Styles and index in one folder component', async () => {
      const nameComponent = 'NewButtom'
      const path = `./atoms/${nameComponent}`
      if (fileExists(path)) await fs.rmdir(path, { recursive: true })
      await createComponent('atom', nameComponent, true)
      expect(fileExists(path)).resolves.toBeTruthy()
      expect(fileExists(`${path}/${nameComponent}.js`)).resolves.toBeTruthy()
      expect(
        fileExists(`${path}/${nameComponent}.stories.js`)
      ).resolves.toBeTruthy()
      expect(
        fileExists(`${path}/${nameComponent}.module.css`)
      ).resolves.toBeTruthy()
      expect(fileExists(`${path}/constants.js`)).resolves.toBeTruthy()
      await fs.rmdir(path, { recursive: true })
    })
  })
})
