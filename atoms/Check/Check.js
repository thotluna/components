import React from 'react'
import PropTypes from 'prop-types'
import styles from './Check.module.css'
import { options } from './constants'
import Icon from '../../atoms/Icons'
import { getClasses } from '../../helpers/styles'

export const Check = ({ id, isChecked, onChange, name, color, size }) => {
  const getStyles = getClasses(styles)({ size, color })
  return (
    <div className={getStyles('container-check', ['size'])}>
      <input
        id={id}
        className={getStyles('input-check', ['color', 'size'])}
        type="checkbox"
        checked={isChecked}
        aria-label={name}
        tabIndex={0}
        onChange={onChange}
        onKeyPress={onChange}
      />

      {isChecked && (
        <div className={getStyles('icon-check')}>
          <Icon color={color} type="check" size={size} />
        </div>
      )}
    </div>
  )
}

Check.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
}

Check.defaultProps = {
  defaultChecked: false,
  color: 'primary',
  size: 'sm',
}

export default Check
