import React from 'react'
import PropTypes from 'prop-types'
import { styles, options } from '.'
import { getClasses } from '../../helpers/styles'

export const Component = ({ children, color }) => {
  const getStyles = getClasses(styles)({ color })
  return <div className={getStyles('component', ['color'])}>{children}</div>
}

Component.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(options.colors),
}

Component.defaultProps = {}

export default Component
