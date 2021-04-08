import React from 'react'
import PropTypes from 'prop-types'
import styles from './Container.module.css'
import { getClasses } from '../../helpers/styles'
import { options } from './constants'

export const Container = ({ children, type, isPlayground }) => {
  const getStyles = getClasses(styles)({ type })
  return (
    <div
      className={getStyles('container', ['type'], {
        'is-playground': isPlayground,
      })}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(options.types).isRequired,
  isPlayground: PropTypes.bool,
}

Container.defaultProps = { isPlayground: false }

export default Container
