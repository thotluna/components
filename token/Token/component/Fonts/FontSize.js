import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../Token.module.css'

import Helper from '../../Helper'

function FontSize({ label, value, children }) {
  return (
    <Helper value={value} label={label}>
      <div className={styles['font-size']} style={{ fontSize: value }}>
        {children}
      </div>
    </Helper>
  )
}

FontSize.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.string,
}

export default FontSize
