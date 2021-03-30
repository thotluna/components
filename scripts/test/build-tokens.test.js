const { convertTokens, builderTokens } = require('../builder-tokens')
const { choices, decisions } = require('./tokens.mock')
const fs = require('fs')

describe('convertTokens', () => {
  describe('give object js one property', () => {
    it('shoud be retun one custom-property css', () => {
      const file = {
        color: {
          flexDirection: 'center',
        },
      }
      const expected = `--color-flex-direction: center;\n`
      const result = convertTokens(null, file)

      expect(result).toBe(expected)
    })
  })
  describe('give object js one property with array', () => {
    it('shoud be retun one custom-property css', () => {
      const file = {
        color: {
          flexDirection: ['center', 'flex'],
        },
      }
      const expected = `--color-flex-direction: center, flex;\n`
      const result = convertTokens(null, file)
      expect(result).toBe(expected)
    })
  })
  describe('give object js varius property', () => {
    it('shoud be retun varius custom-p[roperty css', () => {
      const file = {
        color: {
          flexDirection: 'center',
          width: '100%',
          height: '100%',
        },
      }
      const expected = `--color-flex-direction: center;\n--color-width: 100%;\n--color-height: 100%;\n`
      const result = convertTokens(null, file)

      expect(expected).toBe(result)
    })
  })
  describe('give one objects js varius object property', () => {
    it('shoud be retun varius custom-property css', () => {
      const file = {
        color: {
          brand: {
            flexDirection: 'center',
            width: '100%',
            height: '100%',
          },
          brand2: {
            flexDirection: 'center',
            width: '100%',
            height: '100%',
          },
        },
      }
      const expected = `--color-brand-flex-direction: center;\n--color-brand-width: 100%;\n--color-brand-height: 100%;\n--color-brand2-flex-direction: center;\n--color-brand2-width: 100%;\n--color-brand2-height: 100%;\n`
      const result = convertTokens(null, file)

      expect(expected).toBe(result)
    })
  }),
    describe('give one objects js varius object property', () => {
      it('shoud be retun varius custom-property css', () => {
        const file = {
          color: {
            brand: {
              flexDirection: 'center',
              width: '100%',
              height: '100%',
            },
          },
          large: {
            brand2: {
              flexDirection: 'center',
              width: '100%',
              height: '100%',
            },
          },
        }
        const expected = `--color-brand-flex-direction: center;\n--color-brand-width: 100%;\n--color-brand-height: 100%;\n--large-brand2-flex-direction: center;\n--large-brand2-width: 100%;\n--large-brand2-height: 100%;\n`
        const result = convertTokens(null, file)
        expect(expected).toBe(result)
      })
    })
})

describe('buildTokens', () => {
  describe('give path, choices, decisions ', () => {
    it('should be create file.css', () => {
      const path = './scripts/test/styles.mock.css'
      builderTokens(path, choices, decisions).then(() => {
        expect(fs.existsSync(path)).toBeTruthy()

        const result =
          ':root {\n' +
          '  --color-white: #ffffff;\n' +
          '--height-full: 100%;\n' +
          ' \n' +
          '--color-primary: #ffffff;\n' +
          '--height-primary: 100%;\n' +
          '\n' +
          '}\n'

        fs.readFile(path, { encoding: 'utf8' }, (error, data) => {
          expect(data).toStrictEqual(result)

          fs.unlinkSync(path)
        })
      })
    })
  })
})
