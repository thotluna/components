module.exports = {
  moduleNameMapper: { '\\.css$': 'identity-obj-proxy' },
  transform: {
    '^.+\\.stories\\.jsx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.jsx?$': 'babel-jest',
  },
}
