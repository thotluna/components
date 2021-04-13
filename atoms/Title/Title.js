import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'

export const Title = ({ children, color, size }) => {
  const getStyles = getClasses(styles)({ color })
  return (
    <>
      {size === 'lg' && (
        <h2 className={getStyles('title', ['color'])}>{children}</h2>
      )}
      {size === 'md' && (
        <h3 className={getStyles('title', ['color'])}>{children}</h3>
      )}
      {size === 'sm' && (
        <h4 className={getStyles('title', ['color'])}>{children}</h4>
      )}
    </>
  )
}

Title.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
}

Title.defaultProps = {
  color: 'base',
  size: 'sm',
}

export default Title
