import React from 'react'
import PropTypes from 'prop-types'
import { mapSize } from '../../helper'

import styles from '../../Spacer.module.css'
import withStyles from '../../../../hocs/withStyles'

export function Horizontal({ getStyles, size, isPlayground }) {
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
  getStyles: PropTypes.func.isRequired,
}

Horizontal.defaultProps = {
  isPlayground: false,
  size: 'none',
  getStyles: () => {},
}

export default withStyles(styles)(Horizontal)
