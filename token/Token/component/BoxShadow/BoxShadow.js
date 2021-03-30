import React from 'react'
import PropTypes from 'prop-types'

import Helper from '../../Helper'

import styles from '../../Token.module.css'

const BoxShadow = ({ label, value }) => {
  return (
    <Helper label={label} value={value}>
      <div className={styles.box} style={{ boxShadow: `${value}` }}></div>
    </Helper>
  )
}

BoxShadow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default BoxShadow
