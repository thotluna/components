import React from 'react'
import PropTypes from 'prop-types'
import styles from './Select.module.css'
import withStyles from '../../hocs/withStyles'

export const Select = ({
  id,
  label,
  isHideLabel,
  ref,
  options,
  value,
  isInline,
  onChange,
  getStyles,
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
  getStyles: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isInline: PropTypes.bool,
  onChange: PropTypes.func,
  isHideLabel: PropTypes.bool,
  ref: PropTypes.any,
}

Select.defaultProps = {
  isHideLabel: true,
}

export default withStyles(styles)(Select)
