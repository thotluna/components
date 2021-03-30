const { choices, decisions } = require('../token')
const fs = require('fs')
const toKebabCase = require('../utils/toKebalCase')

function convertTokens(parenKey, object) {
  const objectKeys = Object.keys(object)

  return objectKeys.reduce((acc, curr) => {
    const value = object[curr]

    let customProperty = parenKey
      ? `${toKebabCase(parenKey)}-${toKebabCase(curr)}`
      : `--${curr}`
    if (Array.isArray(value)) {
      return `${acc}${customProperty}: ${value.join(', ')};\n`
    } else if (typeof value === 'object') {
      return `${acc}${convertTokens(customProperty, value)}`
    } else {
      return `${acc}${customProperty}: ${value};\n`
    }
  }, '')
}

function buildTokens(fileUrl, newTokens = false) {
  console.log('<<<<<<>>>>>>>', fileUrl)
  let choice
  let decision
  if (newTokens) {
    const test = require('./tokens.mock')
    choice = test.choices
    decision = test.decisions
  } else {
    choice = choices
    decision = decisions
  }

  const transformedChoices = convertTokens(null, choice)
  const transformedDecisions = convertTokens(null, decision)

  const customProperties = `${transformedChoices} \n${transformedDecisions}`

  const data = `:root {\n  ${customProperties}\n}\n`

  const URL = fileUrl ? fileUrl : './styles/tokens.css'

  fs.writeFile(URL, data, 'utf8', (error) => {
    if (error) throw error
    console.log('🎨 Custom properties created!')
  })
}

buildTokens()

module.exports = { buildTokens, convertTokens }
