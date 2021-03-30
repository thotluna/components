import React from 'react'
import PropTypes from 'prop-types'

import { choices } from '../../..'
import Helper from '../../Helper'

function FontWeight({ label, value, children }) {
  return (
    <Helper label={label} value={value}>
      <div
        style={{
          fontFamily: 'Open sans',
          fontSize: '1.5rem',
          fontWeight: value,
        }}
      >
        {children}
      </div>
    </Helper>
  )
}

FontWeight.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOf(
    Object.keys(choices.fontWeight).map((key) => choices.fontWeight[key])
  ),
  children: PropTypes.string.isRequired,
}

FontWeight.defaultProps = {
  value: 'normal',
}

export default FontWeight
