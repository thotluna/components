import React from 'react'
import PropTypes from 'prop-types'
import styles from './Toggel.module.css'
import { getClasses } from '../../helpers/styles'

export const Toggel = ({ name, checked, onChange }) => {
  const getStyles = getClasses(styles)({})
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
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}

Toggel.defaultProps = {
  checked: false,
}

export default Toggel
