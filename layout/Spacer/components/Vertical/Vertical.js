import React from 'react'
import PropTypes from 'prop-types'
import { mapSize } from '../../helper'

import styles from '../../Spacer.module.css'
import withStyles from '../../../../hocs/withStyles'

export function Vertical({ getStyles, size, height, maxHeight, isPlayground }) {
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
  getStyles: PropTypes.func.isRequired,
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

export default withStyles(styles)(Vertical)
