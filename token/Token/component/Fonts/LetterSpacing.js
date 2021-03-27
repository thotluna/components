import React from 'react'
import PropTypes from 'prop-types'

import Helper from '../../Helper'

function FontSize({ label, value, children }) {
  return (
    <Helper value={value} label={label}>
      <div style={{ fontSize: '1.6rem', letterSpacing: value }}>{children}</div>
    </Helper>
  )
}

FontSize.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  children: PropTypes.string,
}

FontSize.defaultProps = {
  value: 0,
}

export default FontSize
