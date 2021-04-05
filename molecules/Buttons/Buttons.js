import React from 'react'
import PropTypes from 'prop-types'
import styles from './Buttons.module.css'
import withStyles from '../../hocs/withStyles'
import { options } from './constants'

import Icon, { options as iconOptions } from '../../atoms/Icons'
import Heading from '../../atoms/Headings'

export const Buttons = ({
  isOnlyIcon,
  icon,
  iconRight,
  color,
  children,
  getStyles,
  onCLick,
  ariaLabel,
}) => {
  const childrenColor =
    color === 'primary' || color === 'secondary' ? 'inverted' : 'primary'
  return (
    <button
      className={getStyles('buttons', ['size', 'color'], {
        'is-only-icon': isOnlyIcon,
      })}
      onClick={onCLick}
      aria-label={ariaLabel}
    >
      {icon && <Icon type={icon} color={childrenColor} size="sm" />}
      {children && <Heading color={childrenColor}>{children}</Heading>}
      {iconRight && <Icon type={iconRight} color={childrenColor} size="sm" />}
    </button>
  )
}

Buttons.propTypes = {
  getStyles: PropTypes.func.isRequired,
  size: PropTypes.oneOf(options.size),
  color: PropTypes.oneOf(options.color),
  isOnlyIcon: PropTypes.bool,
  icon: PropTypes.oneOf(iconOptions.type),
  iconRight: PropTypes.oneOf(iconOptions.type),
  children: PropTypes.node,
  onCLick: PropTypes.func,
  ariaLabel: PropTypes.string.isRequired,
}

Buttons.defaultProps = {
  size: 'full',
  color: 'primary',
  isOnlyIcon: false,
}

export default withStyles(styles)(Buttons)