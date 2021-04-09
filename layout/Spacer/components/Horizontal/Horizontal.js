import React from 'react'
import PropTypes from 'prop-types'
import { mapSize } from '../../helper'

import styles from '../../Spacer.module.css'
import { getClasses } from '../../../../helpers/styles'

export function Horizontal({ size, isPlayground }) {
  const getStyles = getClasses(styles)({ size })
  return (
    <div
      className={getStyles('spacer', 'horizontal', {
        'is-playground': isPlayground,
      })}
      style={{ height: mapSize(size) }}
    ></div>
  )
}

Horizontal.propTypes = {
  size: PropTypes.string.isRequired,
  isPlayground: PropTypes.bool,
}

Horizontal.defaultProps = {
  isPlayground: false,
  size: 'none',
}

export default Horizontal
