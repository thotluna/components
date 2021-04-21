import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'
import Icon, { options as optionIcon } from '../../atoms/Icon'
import Spacer from '../../layout/Spacer'

export const Button = ({
  value,
  id,
  ariaLabel,
  color,
  icon,
  iconRight,
  isCompact,
  handelOnClick,
}) => {
  const getStyles = getClasses(styles)({ color })
  return (
    <button
      id={id}
      aria-label={ariaLabel}
      className={getStyles('button', ['color'], {
        'is-compact': isCompact,
        'is-round': !value && icon,
      })}
      onClick={handelOnClick}
    >
      {icon && (
        <Icon
          type={icon}
          color={
            color === 'base' ? 'base' : color === 'error' ? 'error' : 'primary'
          }
          size="md"
        />
      )}
      {icon && value && <Spacer.Vertical size="sm" />}
      {value}
      {iconRight && value && (
        <>
          <Spacer.Vertical size="sm" />
          <Icon
            type={iconRight}
            color={
              color === 'base'
                ? 'base'
                : color === 'error'
                ? 'error'
                : 'primary'
            }
          />
        </>
      )}
    </button>
  )
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  handelOnClick: PropTypes.func,
  value: PropTypes.string,
  icon: PropTypes.oneOf(optionIcon.types),
  iconRight: PropTypes.oneOf(optionIcon.types),
  color: PropTypes.oneOf(options.colors),
  isCompact: PropTypes.bool,
}

Button.defaultProps = {
  color: 'base',
  isCompact: false,
}

export default Button
