import React from 'react'
import PropTypes from 'prop-types'
import { mapSize } from '../../helper'

import styles from '../../Spacer.module.css'
import { getClasses } from '../../../../helpers/styles'

export function Vertical({ size, height, maxHeight, isPlayground }) {
  const getStyles = getClasses(styles)({ size })
  return (
    <div
      className={getStyles('spacer', 'vertical', {
        'is-playground': isPlayground,
      })}
      style={{ height, maxHeight, width: mapSize(size) }}
    ></div>
  )
}

Vertical.propTypes = {
  size: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isPlayground: PropTypes.bool,
}

Vertical.defaultProps = {
  size: 'none',
  height: '100%',
  maxHeight: 'auto',
  isPlayground: false,
  getStyles: () => {},
}

export default Vertical
