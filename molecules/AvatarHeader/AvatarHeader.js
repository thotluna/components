import React from 'react'
import PropTypes from 'prop-types'
import styles from './AvatarHeader.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

import Avatar from '../../atoms/Avatar'
import Heading from '../../atoms/Headings'
import SubHeading from '../../atoms/SubHeadings'

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
        <Heading size={size}>{title}</Heading>
        <SubHeading size={size}>{subtitle}</SubHeading>
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
