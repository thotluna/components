import React from 'react'
import PropTypes from 'prop-types'
import styles from './Toggel.module.css'
import withStyles from '../../hocs/withStyles'

export const Toggel = ({ name, checked, onChange, getStyles }) => {
  return (
    <input
      className={getStyles('Toggel')}
      aria-label={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      aria-pressed={checked}
      role="button"
    />
  )
}

Toggel.propTypes = {
  name: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

Toggel.defaultProps = {
  checked: false,
}

export default withStyles(styles)(Toggel)
