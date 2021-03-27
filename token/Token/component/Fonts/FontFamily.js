import React from 'react'
import PropTypes from 'prop-types'

import Helper from '../../Helper'

function FontFamily({ label, value, children }) {
  return (
    <Helper label={label} value={value}>
      <div style={{ fontFamily: value, fontSize: '1.6rem' }}>{children}</div>
    </Helper>
  )
}

FontFamily.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.string,
}

FontFamily.defaultProps = {
  value: 'sans',
}

export default FontFamily
