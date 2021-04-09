import React from 'react'
import PropTypes from 'prop-types'
import styles from './Select.module.css'
import { getClasses } from '../../helpers/styles'

export const Select = ({
  id,
  isInline,
  isHideLabel,
  label,
  onChange,
  options,
  ref,
  value,
}) => {
  const getStyles = getClasses(styles)({})
  return (
    <label className={getStyles('label')}>
      <span
        className={getStyles('span', {
          'is-hide': isHideLabel,
        })}
      >
        {label}
      </span>
      <select
        className={getStyles('container', {
          'is-inline': isInline,
        })}
        onChange={(event) => onChange(event?.currentTarget?.value)}
        value={value}
        id={id}
        aria-label={label}
        ref={ref}
      >
        <option key="0" value={null}></option>
        {options.map(({ text, value }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </label>
  )
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  isInline: PropTypes.bool,
  isHideLabel: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ref: PropTypes.any,
  onChange: PropTypes.func,
}

Select.defaultProps = {
  isHideLabel: true,
}

export default Select
