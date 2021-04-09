import React from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'

export const Avatar = ({ src, size }) => {
  const getStyles = getClasses(styles)({ size })
  return (
    <img src={src} alt="Avatar" className={getStyles('container', ['size'])} />
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(options.size),
}

Avatar.defaultProps = {
  src: 'https://picsum.photos/id/237/200/300',
}

export default Avatar
