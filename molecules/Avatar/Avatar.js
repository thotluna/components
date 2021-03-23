import React from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.module.css'

function Avatar({ children }) {
  // TODO: styles.component change by container
  return <div className={styles.componet}>{children}</div>
}

Avatar.propTypes = {
  children: PropTypes.node,
}

Avatar.defaultProps = {}

export default Avatar
