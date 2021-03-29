import {
  getClasses,
  getDynamicClasses,
  getModuleClasses,
  getObjectClasses,
} from './styles'

const cssModuleMock = {
  ['size-sm']: '.xyz_size_sm',
  ['color-red']: '.xyz_color_red',
  ['is-editable']: '.xyz_is_editable',
  ['is-inverted']: '.xyz_is_inverted',
}

const propsMock = { size: 'sm', color: 'red' }

describe('helper/styles', () => {
  describe('getDynamicClasses', () => {
    describe('given an array of existing class names', () => {
      test('it should return an object with the classes and respective values', () => {
        const expected = { '.xyz_size_sm': 'sm', '.xyz_color_red': 'red' }
        const result = getDynamicClasses(cssModuleMock, propsMock, [
          'size',
          'color',
        ])
        expect(expected).toStrictEqual(result)
      })
    })
    describe('given an array of some class names', () => {
      test('it should return an object with one classes and respective value', () => {
        const expected = { '.xyz_size_sm': 'sm' }
        const result = getDynamicClasses(cssModuleMock, propsMock, [
          'size',
          'width',
        ])
        expect(expected).toStrictEqual(result)
      })
    })
    describe('given an array of class names no existent', () => {
      test('it should return an empty object', () => {
        const expected = {}
        const result = getDynamicClasses(cssModuleMock, propsMock, [
          'border',
          'width',
        ])
        expect(expected).toStrictEqual(result)
      })
    })
  })
  describe('getModuleClasses', () => {
    describe('give a Class name existent intro style', () => {
      it('should return the key classname of the styles', () => {
        const expected = '.xyz_size_sm'
        const result = getModuleClasses(cssModuleMock, 'size-sm')
        expect(expected).toStrictEqual(result)
      })
    })
    describe('give a Class name not existent intro style', () => {
      it('should return the same key classname ', () => {
        const expected = 'size-lg'
        const result = getModuleClasses(cssModuleMock, 'size-lg')
        expect(expected).toStrictEqual(result)
      })
    })
    describe('give styles module is undefined', () => {
      it('should return the same key classname ', () => {
        const expected = 'size-lg'
        const result = getModuleClasses(undefined, 'size-lg')
        expect(expected).toStrictEqual(result)
      })
    })
    describe('give styles module is null', () => {
      it('should return the same key classname ', () => {
        const expected = 'size-lg'
        const result = getModuleClasses(null, 'size-lg')
        expect(expected).toStrictEqual(result)
      })
    })
  })
  describe('getObjectClass', () => {
    describe('give an object whit prop match style module', () => {
      it('should be return a object styles module', () => {
        const expected = { '.xyz_is_editable': true, '.xyz_is_inverted': true }
        const result = getObjectClasses(cssModuleMock, {
          'is-editable': true,
          'is-inverted': true,
        })
        expect(expected).toStrictEqual(result)
      })
    })

    describe('give an object whit prop match style module', () => {
      it('should be return a object styles module', () => {
        const expected = { '.xyz_is_editable': true }
        const result = getObjectClasses(cssModuleMock, {
          'is-editable': true,
          'is-closed': true,
        })
        expect(expected).toStrictEqual(result)
      })
    })
    describe('give an object whit prop not match style module', () => {
      it('should be return a some object', () => {
        const expected = {}
        const result = getObjectClasses(cssModuleMock, {
          'is-drawabled': true,
          'is-closed': true,
        })
        expect(expected).toStrictEqual(result)
      })
    })
    describe('give an empty object', () => {
      it('should be return a empty object', () => {
        const expected = {}
        const result = getObjectClasses(cssModuleMock, {})
        expect(expected).toStrictEqual(result)
      })
    })
  })
  describe('#getClasses', () => {
    describe('when `arg` is an array', () => {
      it('should return the classnames', () => {
        // given
        const args = ['size', 'color']
        // when
        const result = getClasses(cssModuleMock)(propsMock)(args)
        // then
        const expected = '.xyz_size_sm .xyz_color_red'

        expect(result).toStrictEqual(expected)
      })
    })

    describe('when `arg` is an string and `cssModule` contains the `classKey`', () => {
      it('should return the classnames', () => {
        // given
        const args = 'size-sm'
        // when
        const result = getClasses(cssModuleMock)(propsMock)(args)
        // then
        const expected = '.xyz_size_sm'

        expect(result).toStrictEqual(expected)
      })
    })

    describe("when `arg` is an string and `cssModule` doesn't contain the `classKey`", () => {
      it('should return the classnames', () => {
        // given
        const args = 'width-full'
        // when
        const result = getClasses(cssModuleMock)(propsMock)(args)
        // then
        const expected = 'width-full'

        expect(result).toStrictEqual(expected)
      })
    })

    describe('when `arg` is an object', () => {
      it('should return the classnames', () => {
        // given
        const args = { 'is-editable': true, 'is-block': true }
        // when
        const result = getClasses(cssModuleMock)(propsMock)(args)
        // then
        const expected = '.xyz_is_editable'

        expect(result).toStrictEqual(expected)
      })
    })
  })
})
