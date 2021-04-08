import classNames from 'classnames'

export const getDynamicClasses = (cssModule = {}, props = {}, classes) => {
  return classes.reduce((classesObject, classKey) => {
    const propValue = props[classKey]
    const className = cssModule[`${classKey}-${propValue}`]

    return className && propValue
      ? { ...classesObject, [className]: propValue }
      : classesObject
  }, {})
}

export const getModuleClasses = (cssModule, classKey) => {
  return (cssModule && cssModule[classKey]) || classKey
}

export const getObjectClasses = (cssModule, object) => {
  return Object.keys(object).reduce((classes, classKey) => {
    const className = cssModule[classKey]
    return className ? { ...classes, [className]: object[classKey] } : classes
  }, {})
}

export const getClasses = (cssModule = {}) => (props) => (...args) => {
  const allClass = args.map((arg) => {
    if (Array.isArray(arg)) {
      const dinamicClasses = getDynamicClasses(cssModule, props, arg)
      // console.log('>>>dinamic', dinamicClasses)
      return dinamicClasses
    } else if (typeof arg === 'string') {
      const moduleClass = getModuleClasses(cssModule, arg)
      // console.log('>>>module', moduleClass)
      return moduleClass
    } else if (typeof arg === 'object') {
      const objectClass = getObjectClasses(cssModule, arg)
      // console.log('>>>object', objectClass)
      return objectClass
    }
  })
  // console.log(allClass)

  const result = classNames(allClass)

  // console.log(result)
  return result
}
