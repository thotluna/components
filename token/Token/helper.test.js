const { getTokenItems } = require('./helpers')

const tokens = {
  color: {
    branch: {
      primary: '#123123',
    },
    backrgound: {
      second: '#323232',
    },
  },
  borderRadius: {
    pimary: '5px',
  },
}

describe('helper - getTokenItems', () => {
  describe('give one object token and key of token', () => {
    it('should be retun one array of object with label and value correct', () => {
      const expected = [{ label: '--border-radius-pimary', value: '5px' }]
      const res = getTokenItems(tokens.borderRadius, 'borderRadius')()

      expect(res).toEqual(expected)
    })
  })
  describe('give a list tokens,  key of token and group by token', () => {
    it('should be retun one array of object with label and value correct', () => {
      const expected = [{ label: '--color-branch-primary', value: '#123123' }]
      const res = getTokenItems(tokens.color, 'color')

      const result = res('branch')

      expect(result).toEqual(expected)
    })
  })
})
