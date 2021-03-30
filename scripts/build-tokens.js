const { builderTokens } = require('./builder-tokens')
const { choices, decisions } = require('../token/index')

function buildTokens() {
  const file = './styles/tokens.css'
  builderTokens(file, choices, decisions)
    .then(() => console.log(`Create ${file}`))
    .catch((error) => console.error(error))
}

buildTokens()
