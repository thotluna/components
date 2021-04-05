import React from 'react'
import PropTypes from 'prop-types'
import styles from './Toggle.module.css'
import withStyles from '../../hocs/withStyles'

export const Toggle = ({ name, checked, onChange, getStyles }) => {
  return (
    <input
      className={getStyles('toggle')}
      aria-label={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      aria-pressed={checked}
      role="button"
    />
  )
}

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

Toggle.defaultProps = {
  checked: false,
}

export default withStyles(styles)(Toggle)
