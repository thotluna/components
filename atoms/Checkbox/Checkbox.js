import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Checkbox.module.css'
import { getClasses } from '../../helpers/styles'

const handelChecked = ({ checked, setChecked, onChecked }) => () => {
  setChecked(!checked)
  onChecked(!checked)
}

export const Checkbox = ({ id, ariaLabel, isChecked, onChecked }) => {
  const [checked, setChecked] = useState(isChecked)
  const getStyles = getClasses(styles)({})
  return (
    <input
      id={id}
      aria-label={ariaLabel}
      type="checkbox"
      className={getStyles('checkbox')}
      checked={checked}
      onChange={handelChecked({ checked, setChecked, onChecked })}
    />
  )
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChecked: PropTypes.func,
}

Checkbox.defaultProps = {
  // isChecked: false,
}

export default Checkbox
