import React from 'react'
import PropTypes from 'prop-types'
import styles from './Icon.module.css'
import { options, getIcon } from './constants'
import { getClasses } from '../../helpers/styles'

export const Icon = ({ type, color, size }) => {
  console.log({ color })
  const getStyles = getClasses(styles)({ color, size })
  return (
    <span className={getStyles('icon', ['color', 'size'])}>
      {getIcon(type)}
    </span>
  )
}

Icon.propTypes = {
  type: PropTypes.oneOf(options.types).isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
}

Icon.defaultProps = {
  color: 'base',
  size: 'sm',
}

export default Icon
