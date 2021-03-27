import React from 'react'
import PropTypes from 'prop-types'

import Helper from '../../Helper'

import styles from '../../Token.module.css'

const BorderRadius = ({ label, value }) => {
  console.log('>>>rdius', value)
  return (
    <Helper label={label} value={value}>
      <div className={styles.box} style={{ borderRadius: value }}></div>
    </Helper>
  )
}

BorderRadius.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default BorderRadius
