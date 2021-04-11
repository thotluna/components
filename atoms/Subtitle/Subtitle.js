import React from 'react'
import PropTypes from 'prop-types'
import styles from './Subtitle.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'

export const Subtitle = ({ children, color, size }) => {
  const getStyles = getClasses(styles)({ color })
  return (
    <>
      {size === 'lg' && (
        <h3 className={getStyles('container', ['color'])}>{children}</h3>
      )}
      {size === 'md' && (
        <h4 className={getStyles('container', ['color'])}>{children}</h4>
      )}
      {size === 'sm' && (
        <h5 className={getStyles('container', ['color'])}>{children}</h5>
      )}
    </>
  )
}

Subtitle.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
}

Subtitle.defaultProps = {
  size: 'md',
  color: 'base',
}

export default Subtitle
