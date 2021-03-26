import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../Token.module.css'

import Heper from '../../Helper'

function FontFamily({ label, value, children }) {
  return (
    <Heper label={label} value={value}>
      <div className={styles['font-family']} style={{ fontFamily: value }}>
        {children}
      </div>
    </Heper>
  )
}

FontFamily.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.string,
}

export default FontFamily
