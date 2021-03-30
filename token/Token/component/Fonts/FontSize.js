import React from 'react'
import PropTypes from 'prop-types'

import Helper from '../../Helper'

function FontSize({ label, value, children }) {
  return (
    <Helper value={value} label={label}>
      <div style={{ fontSize: value }}>{children}</div>
    </Helper>
  )
}

FontSize.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.string,
}

FontSize.defaultProps = {
  value: '1.5rem',
}

export default FontSize
