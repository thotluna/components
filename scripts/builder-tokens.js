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

function builderTokens(fileUrl, choices, decisions) {
  if (!fileUrl || !choices || !decisions) {
    return
  } else {
    const transformedChoices = convertTokens(null, choices)
    const transformedDecisions = convertTokens(null, decisions)
    const customProperties = `${transformedChoices} \n${transformedDecisions}`
    const data = `:root {\n  ${customProperties}\n}\n`
    const URL = fileUrl ? fileUrl : './styles/tokens.css'
    return new Promise((resolve, reject) => {
      fs.writeFile(URL, data, 'utf8', (error) => {
        if (error) reject(error)
        resolve()
      })
    })
  }
}

builderTokens()

module.exports = { builderTokens, convertTokens }
