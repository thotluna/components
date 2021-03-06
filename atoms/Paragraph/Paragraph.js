import React from 'react'
import PropTypes from 'prop-types'
import styles from './Paragraph.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'

export const Paragraph = ({ children, color, size, isInline }) => {
  const getStyles = getClasses(styles)({ color, size })
  return (
    <p
      className={getStyles('paragraph', ['color', 'size'], {
        'is-inline': isInline,
      })}
    >
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isInline: PropTypes.bool,
}

Paragraph.defaultProps = {
  size: 'sm',
  color: 'base',
  isInline: false,
}

export default Paragraph
