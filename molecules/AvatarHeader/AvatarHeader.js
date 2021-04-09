import React from 'react'
import PropTypes from 'prop-types'
import styles from './AvatarHeader.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

import Avatar from '../../atoms/Avatar'
import Title from '../../atoms/Title'
import Subtitle from '../../atoms/Subtitle'

export const AvatarHeader = ({ title, subtitle, src, size, getStyles }) => {
  return (
    <div className={getStyles('container')}>
      <Avatar src={src} size={size} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Title size={size}>{title}</Title>
        <Subtitle size={size}>{subtitle}</Subtitle>
      </div>
    </div>
  )
}

AvatarHeader.propTypes = {
  getStyles: PropTypes.func.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(options.size),
}

AvatarHeader.defaultProps = {
  size: 'md',
}

export default withStyles(styles)(AvatarHeader)
