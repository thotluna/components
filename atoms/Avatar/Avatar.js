import React from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'

export const Avatar = ({ src, size }) => {
  const getStyles = getClasses(styles)({ size })
  return (
    <div className={getStyles('avatar', ['size'])}>
      <img
        className={getStyles('avatar', ['size'])}
        src={src}
        alt="your avatar"
      />
    </div>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(options.sizes),
}

Avatar.defaultProps = {
  size: 'md',
}

export default Avatar
