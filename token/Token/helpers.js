import toKebabCase from '../../utils/toKebalCase'

export const getTokenItems = (tokens, tokenKey) => (group) => {
  if (group) {
    return Object.keys(tokens[group]).map((key) => ({
      label: `--${toKebabCase(tokenKey)}-${group}-${toKebabCase(key)}`,
      value: tokens[group][key],
    }))
  }

  return Object.keys(tokens).map((key) => ({
    label: `--${toKebabCase(tokenKey)}-${toKebabCase(key)}`,
    value: tokens[key],
  }))
}
