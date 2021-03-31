const fs = require('fs')
const {
  readTemplateComponent,
  replaceComponent,
  writeFile,
  ATOMIC_DESING_TYPE,
  task,
  urlsTemplates,
} = require('../Builder-component')

describe('Builder Component', () => {
  describe('give readTemplateComponent', () => {
    it('should be return one file', () => {
      for (const item of task) {
        const { url } = urlsTemplates[item]
        const file = fs.readFileSync(url, { encoding: 'utf8' })
        readTemplateComponent(url).then((resultFile) => {
          expect(resultFile).toEqual(file)
        })
      }
    })
  })
  describe('given a phrase with Component replaceComponent', () => {
    it('should be return a phrase with Button ', () => {
      const phrase =
        'The Componet is Blue, and new componet will be red, and shoud be atomic/Componet'
      const expected =
        'The Button is Blue, and new componet will be red, and shoud be atomic/Button'
      const result = replaceComponent(phrase, 'Button')
      expect(expected).toStrictEqual(result)
    })
    it('should be return a phrase with atom ', () => {
      const phrase =
        'The Componet is Blue, and new componet will be red, and shoud be atomic/Componet'
      const expected =
        'The Componet is Blue, and new componet will be red, and shoud be Atoms/Componet'
      const result = replaceComponent(phrase, ATOMIC_DESING_TYPE.atom)
      expect(expected).toStrictEqual(result)
    })
  })
  describe('give one urlFile and data ', () => {
    it('should be create file component', () => {
      const path = './scripts/test/component.js'
      const component = `testing:{test:'green'}`
      writeFile(path, component).then(() => {
        expect(fs.existsSync(path)).toBeTruthy()
        fs.unlinkSync(path)
      })
    })
  })
})
