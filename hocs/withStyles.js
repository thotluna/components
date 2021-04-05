import React from 'react'
import { getClasses } from '../helpers/styles'

const withStyles = (styles) => (WrappedComponent) => {
  const WithStylesComponent = (props) => {
    const allProps = { ...WrappedComponent.defaultProps, ...props }
    const style = getClasses(styles)(allProps)
    // console.log({ WrappedComponent, style, allProps })
    return <WrappedComponent getStyles={style} {...props} />
  }

  WithStylesComponent.displayName = WrappedComponent.displayName

  return WithStylesComponent
}

export default withStyles
