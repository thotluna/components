import React from 'react'
import PropTypes from 'prop-types'

import { choices } from '../../..'
import Helper from '../../Helper'

function FontWeight({ label, value, children }) {
  const styleWeight = choices.fontWeight[value]
  console.log('>>> value', value)
  return (
    <Helper label={label} value={value}>
      <div style={{ fontFamily: 'Open sans', fontWeight: `${styleWeight}` }}>
        {children}
      </div>
    </Helper>
  )
}

FontWeight.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOf(['normal', 'bold']),
  children: PropTypes.string.isRequired,
}

FontWeight.defaultProps = {
  value: 'normal',
}

export default FontWeight
