import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '.'
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
}) => {
  return (
    <input
      className={getStyles('input', {
        'is-inline': isInline,
      })}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      ref={refInput}
    />
  )
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  getStyles: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  value: PropTypes.string,
  refInput: PropTypes.any,
  placeholder: PropTypes.string,
  isInline: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  isInline: false,
  onChange: () => {},
  getStyles: () => {},
}

export default withStyles(styles)(Input)
