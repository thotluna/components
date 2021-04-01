import React from 'react'
import PropTypes from 'prop-types'
import { styles, options } from './.'
import withStyles from '../../hocs/withStyles'

export const SubHeadings = ({ children, getStyles }) => {
  return (
    <div className={getStyles('container', ['color', 'size', 'weight'])}>
      {children}
    </div>
  )
}

SubHeadings.propTypes = {
  children: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  weight: PropTypes.oneOf(options.weights),
}

SubHeadings.defaultProps = {
  color: 'base',
  size: 'md',
  weight: 'bold',
}

export default withStyles(styles)(SubHeadings)
