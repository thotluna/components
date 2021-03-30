const { choices, decisions } = require('../token')
const toKebalCase = require('../utils/toKebalCase')
const fs = require('fs')

const cleanLines = (string = '') => string.trim().replace(/^\n\n/gm, '\n')

function transformTokens(parentKey, object) {
  const objectKeys = Object.keys(object)

  return objectKeys.reduce((transformedTokens, objectKey) => {
    const value = object[objectKey]

    const customProperty = parentKey
      ? toKebalCase(`${parentKey}-${objectKey}`)
      : toKebalCase(`${objectKey}`)

    if (Array.isArray(value)) {
      return `${transformedTokens}\n  --${customProperty}: ${value.join(', ')};`
    } else if (typeof value === 'object') {
      return `${transformedTokens}\n${transformTokens(customProperty, value)}`
    } else {
      const label = `--${parentKey}-${objectKey}`
      return `${transformedTokens}\n  ${label}: ${value};`
    }
  }, '')
}

function buildTokens(fileUrl) {
  console.log('<<<<<<>>>>>>>', fileUrl)
  const transformedChoices = transformTokens(null, choices)
  const transformedDecisions = transformTokens(null, decisions)
  const customProperties = `${transformedChoices}${transformedDecisions}`

  const data = `:root {\n  ${cleanLines(customProperties)}\n}\n`

  const URL = fileUrl ? fileUrl : './styles/tokens.css'

  fs.writeFile(URL, data, 'utf8', (error) => {
    if (error) throw error
    console.log('🎨 Custom properties created!')
  })
}

buildTokens()

module.exports = buildTokens
