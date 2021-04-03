import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

export const Input = ({
  type,
  value,
  isInline,
  onChange,
  refInput,
  placeholder,
  getStyles,
  label,
  isHideLabel,
  id,
}) => {
  return (
    <label className={getStyles('label')}>
      <span
        className={getStyles('span', {
          'is-hide': isHideLabel,
        })}
      >
        {label}
      </span>
      <input
        className={getStyles('input', {
          'is-inline': isInline,
        })}
        id={id}
        aria-label={label}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        ref={refInput}
      />
    </label>
  )
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  getStyles: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(options.types).isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  refInput: PropTypes.any,
  isInline: PropTypes.bool,
  isHideLabel: PropTypes.bool,
}

Input.defaultProps = {
  placeholder: '',
  value: '',
  isInline: false,
  isHideLabel: true,
  onChange: () => {},
  getStyles: () => {},
}

export default withStyles(styles)(Input)
