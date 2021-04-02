import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '.'
import withStyles from '../../hocs/withStyles'
import { getIcon, options } from './constants'

export const Icon = ({ type, color, hasBorder, getStyles }) => {
  console.log(type, hasBorder)
  return (
    <div
      className={getStyles('container', ['color', 'size'], {
        'has-borde-base': hasBorder && color === 'base',
        'has-borde-primary': hasBorder && color === 'primary',
        'has-borde-secondary': hasBorder && color === 'secondary',
      })}
    >
      {getIcon(type)}
    </div>
  )
}

Icon.propTypes = {
  getStyles: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.type),
  color: PropTypes.oneOf(options.colors),
  hasBorder: PropTypes.bool,
  size: PropTypes.oneOf(options.size),
}

Icon.defaultProps = {
  color: 'primary',
  type: 'chevron-left',
  size: 'sm',
  hasBorder: false,
}

export default withStyles(styles)(Icon)
