const cssModules = require('../config/cssModules')
module.exports = {
  stories: ['../{token,atoms,molecules,layout}/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: cssModules(),
}
