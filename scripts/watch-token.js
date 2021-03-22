const buildTokens = require('./build-token')
var watch = require('node-watch')

watch('token/index.js', { recursive: true }, function (evt, name) {
  console.log(`>>>> name:`, name)
  if (evt === 'update') {
    buildTokens('styles/tokens.css')
  }
})
