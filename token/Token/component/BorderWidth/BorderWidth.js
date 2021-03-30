import React from 'react'
import PropTypes from 'prop-types'

import Helper from '../../Helper'

import styles from '../../Token.module.css'

const BorderWidth = ({ label, value }) => {
  return (
    <Helper label={label} value={value}>
      <div className={styles.box} style={{ borderWidth: value }}></div>
    </Helper>
  )
}

BorderWidth.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

BorderWidth.defaultProps = {
  value: 'none',
}

export default BorderWidth
