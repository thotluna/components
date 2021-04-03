import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './Paragraph.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

export const Paragraph = ({ children, isInline, getStyles }) => {
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
  getStyles: PropTypes.func.isRequired,
  isInline: PropTypes.bool,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.size),
}

Paragraph.defaultProps = {
  isInline: false,
  color: 'base',
  size: 'md',
}

export default withStyles(styles)(Paragraph)
