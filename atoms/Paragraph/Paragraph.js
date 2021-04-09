import React from 'react'
import PropTypes from 'prop-types'
import styles from './Paragraph.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'

export const Paragraph = ({ children, isInline, color, size }) => {
  const getStyles = getClasses(styles)({ color, size })
  return (
    <p
      className={getStyles('container', ['color', 'size'], {
        'is-inline': isInline,
      })}
    >
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node,
  isInline: PropTypes.bool,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.size),
}

Paragraph.defaultProps = {
  isInline: false,
  color: 'base',
  size: 'md',
}

export default Paragraph
