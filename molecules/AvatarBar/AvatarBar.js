import React from 'react'
import PropTypes from 'prop-types'
import styles from './AvatarBar.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'

import Avatar from '../../atoms/Avatar'
import Title from '../../atoms/Title'
import Paragraph from '../../atoms/Paragraph'

export const AvatarBar = ({ user, size }) => {
  const getStyles = getClasses(styles)({ size })
  return (
    <div className={getStyles('avatarBar', ['size'])}>
      <Avatar src={user.avatar} size={size} />
      <div className={getStyles('avatar-data')}>
        <Title size={size}>{user.username}</Title>
        {size === 'lg' && (
          <Paragraph size="sm" color="inverted">
            {user.email}
          </Paragraph>
        )}
      </div>
    </div>
  )
}

AvatarBar.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    email: PropTypes.string,
  }).isRequired,
  size: PropTypes.oneOf(options.sizes),
}

AvatarBar.defaultProps = {
  size: 'lg',
}

export default AvatarBar
