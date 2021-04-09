import React from 'react'
import PropTypes from 'prop-types'

import styles from './Card.module.css'
import { options } from './constants'

import { getClasses } from '../../helpers/styles'

export const Card = ({
  color,
  size,
  onClick,
  isClickable,
  isDraggable,
  children,
}) => {
  const getStyles = getClasses(styles)({ color, size })
  return (
    <div
      onClick={onClick}
      className={getStyles('card', ['color', 'size'], {
        'is-clickable': isClickable,
        'is-draggable': isDraggable,
      })}
      tabIndex={isClickable ? 0 : -1}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
  isDraggable: PropTypes.bool,
}

Card.defaultProps = {
  color: 'base',
  size: 'sm',
}

export default Card
