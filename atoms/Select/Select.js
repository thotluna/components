import React from 'react'
import PropTypes from 'prop-types'
import styles from './Select.module.css'
import { getClasses } from '../../helpers/styles'

export const Select = ({
  id,
  isCompact,
  isShowLabel,
  label,
  onChange,
  options,
  ref,
  value,
}) => {
  const getStyles = getClasses(styles)({})
  return (
    <div>
      {isShowLabel && (
        <label
          className={getStyles('label', {
            'is-compact': isCompact,
          })}
        >
          <span className={getStyles('span')}>{label}</span>
        </label>
      )}
      <div className={getStyles('select-container')}>
        <select
          className={getStyles('select', {
            'is-compact': isCompact,
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
        <svg
          className={getStyles('icon-select')}
          height="21"
          viewBox="0 0 21 21"
          width="21"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path
            d="m8.5.5-4 4-4-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(6 8)"
          />
        </svg>
      </div>
    </div>
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
  isCompact: PropTypes.bool,
  isShowLabel: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ref: PropTypes.any,
  onChange: PropTypes.func,
}

Select.defaultProps = {
  isHideLabel: true,
}

export default Select
