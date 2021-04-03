import React from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

export const Avatar = ({ src, getStyles }) => {
  return <img src={src} className={getStyles('container', ['size'])} />
}

Avatar.propTypes = {
  getStyles: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(options.size),
}

Avatar.defaultProps = {
  src: 'https://picsum.photos/id/237/200/300',
}

export default withStyles(styles)(Avatar)
