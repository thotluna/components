import React from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.module.css'

function Avatar({ children }) {
  return <div className={styles.container}>{children}</div>
}

Avatar.propTypes = {
  children: PropTypes.node,
}

Avatar.defaultProps = {}

export default Avatar
