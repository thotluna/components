import React from 'react'
import PropTypes from 'prop-types'
import styles from './LineSeparator.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'

export const LineSeparator = ({ color, size }) => {
  const getStyles = getClasses(styles)({ color, size })
  return <hr className={getStyles('lineSeparator', ['color', 'size'])} />
}

LineSeparator.propTypes = {
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
}

LineSeparator.defaultProps = {
  color: 'primary',
  size: 'sm',
}

export default LineSeparator
