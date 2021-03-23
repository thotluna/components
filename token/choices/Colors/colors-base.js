import React from 'react'
import Colors from './Colors'
import { choices } from '../../index'
import PropTypes from 'prop-types'

export default function ColorBase({ list, type }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(9, 1fr)',
        gap: '.6em',
        textShadow: '#fff 1px 1px 1px',
      }}
    >
      {list.map((key) => {
        const value = choices.color[type][key]
        const label = `color-${type}-${key}`
        return (
          <Colors key={key} customProperty={value} customPropertyName={label} />
        )
      })}
    </div>
  )
}

ColorBase.propTypes = {
  list: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
}
