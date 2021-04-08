import React from 'react'
import PropTypes from 'prop-types'
import styles from './Icon.module.css'
import { getClasses } from '../../helpers/styles'
import { getIcon, options } from './constants'

export const Icon = ({ type, color, size, hasBorder }) => {
  const classStyles = getClasses(styles)({ color, size })
  return (
    <div
      className={classStyles('container', ['color', 'size'], {
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
  type: PropTypes.oneOf(options.type),
  color: PropTypes.oneOf(options.colors),
  hasBorder: PropTypes.bool,
  size: PropTypes.oneOf(options.size),
}

Icon.defaultProps = {
  color: 'sun',
  type: 'chevron-left',
  size: 'sm',
  hasBorder: false,
}

export default Icon
