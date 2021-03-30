import React from 'react'
import PropTypes from 'prop-types'

import Helper from '../../Helper'

function FontFamily({ label, value, children }) {
  console.log('>>>>value', value)
  return (
    <Helper label={label} value={value}>
      <div style={{ fontFamily: value, fontSize: '1.6rem' }}>{children}</div>
    </Helper>
  )
}

FontFamily.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  children: PropTypes.string,
}

FontFamily.defaultProps = {
  value: ["'Open Sans'", 'Arial', 'Helvetica', 'sans-serif'],
}

export default FontFamily
