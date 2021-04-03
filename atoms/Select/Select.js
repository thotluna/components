import React from 'react'
import PropTypes from 'prop-types'
import styles from './Select.module.css'
import withStyles from '../../hocs/withStyles'

export const Select = ({ options, value, isInline, onChange, getStyles }) => {
  return (
    <select
      className={getStyles('container', {
        'is-inline': isInline,
      })}
      onChange={(event) => onChange(event?.currentTarget?.value)}
      value={value}
    >
      <option key="0" value={null}></option>
      {options.map(({ text, value }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isInline: PropTypes.bool,
  onChange: PropTypes.func,
}

Select.defaultProps = {}

export default withStyles(styles)(Select)
