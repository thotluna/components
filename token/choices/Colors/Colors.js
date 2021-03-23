import React from 'react'
import PropTypes from 'prop-types'

import styles from './Colors.module.css'

function Colors({ customPropertyName, customProperty }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: customProperty }}
    >
      <h2>{`var(--${customPropertyName})`}</h2>
    </div>
  )
}

Colors.propTypes = {
  customPropertyName: PropTypes.string.isRequired,
  customProperty: PropTypes.string.isRequired,
}

export default Colors
