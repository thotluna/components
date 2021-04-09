import React from 'react'
import PropTypes from 'prop-types'
import styles from './Spacer.module.css'
import { mapSize } from './helper'
import Vertical from './components/Vertical/Vertical'
import Horizontal from './components/Horizontal/'

import { getClasses } from '../../helpers/styles'

export function Spacer({ size, isPlayground }) {
  const getStyles = getClasses(styles)({})
  return (
    <div
      className={getStyles('spacer', {
        'is-playground': isPlayground,
      })}
      style={{
        display: 'inline-block',
        width: mapSize(size),
        height: mapSize(size),
      }}
    />
  )
}

Spacer.propTypes = {
  /**
   Parting length
  */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   True, show border in colors
  */
  isPlayground: PropTypes.bool,
}

Spacer.defaultProps = {
  size: 'none',
  isPlayground: false,
  getStyles: () => {},
}

Spacer.Horizontal = Horizontal
Spacer.Vertical = Vertical

export default Spacer
