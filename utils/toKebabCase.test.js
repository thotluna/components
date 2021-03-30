const toKebabCase = require('./toKebalCase')

describe('toKebabCase', () => {
  describe('give one word CamelCase', () => {
    it('shoud be return kebaCase', () => {
      const expected = 'one-class'
      const result = toKebabCase('oneClass')
      expect(expected).toBe(result)
    })
  })
  describe('give one word KebablCase', () => {
    it('shoud be return kebaCase', () => {
      const expected = 'one-class'
      const result = toKebabCase('one-class')
      expect(expected).toBe(result)
    })
  })
})
