import React from 'react'
import PropTypes from 'prop-types'

import Helper from '../../Helper'

function LineHeight({ label, value, children }) {
  return (
    <Helper value={value} label={label}>
      <div style={{ fontSize: '1.6rem', lineHeight: value }}>{children}</div>
    </Helper>
  )
}

LineHeight.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  children: PropTypes.string,
}

LineHeight.defaultProps = {
  value: 1,
}

export default LineHeight
