import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.module.css'
import { options } from './constants'

import { getClasses } from '../../helpers/styles'

export const Title = ({ children, size, color }) => {
  const getStyles = getClasses(styles)({ size, color })

  return (
    <>
      {size === 'lg' && (
        <h2 className={getStyles('container', ['color'])}>{children}</h2>
      )}
      {size === 'md' && (
        <h3 className={getStyles('container', ['color'])}>{children}</h3>
      )}
      {size === 'sm' && (
        <h4 className={getStyles('container', ['color'])}>{children}</h4>
      )}
    </>
  )
}

Title.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(options.sizes),
  color: PropTypes.oneOf(options.colors),
}

Title.defaultProps = {
  color: 'primary',
  size: 'md',
}

export default Title
