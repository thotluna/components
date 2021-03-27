import React from 'react'
import PropTypes from 'prop-types'
import styles from './Spacer.module.css'
import { mapSize } from './helper'
import withStyles from '../../hocs/withStyles'
import Vertical from './components/Vertical/Vertical'
import Horizontal from './components/Horizontal/'

export function Spacer({ getStyles, size, isPlayground }) {
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
  getStyles: PropTypes.func.isRequired,
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

const SpacerWithStyles = withStyles(styles)(Spacer)

SpacerWithStyles.Horizontal = Horizontal
SpacerWithStyles.Vertical = Vertical

export default SpacerWithStyles
