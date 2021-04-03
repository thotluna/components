import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './Button.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'
import Headings from '../../atoms/Headings'
import Icon from '../../atoms/Icons'
import { Vertical } from '../../layout/Spacer/components/Vertical/Vertical'

export const Button = ({
  type,
  isInline,
  onCLick,
  addons,
  iconLeft,
  iconRight,
  children,
  getStyles,
}) => {
  return (
    <button
      className={getStyles('container', ['type'], {
        'is-inline': isInline || type === 'tertiary' || iconLeft || iconRight,
      })}
      onClick={onCLick}
    >
      {addons && addons.prepend}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {iconLeft && (
          <Icon
            color={
              type === 'primary' || type === 'accent' ? 'inverted' : 'primary'
            }
            getStyles={() => {}}
            size="sm"
            type={iconLeft}
          />
        )}
        {iconLeft && children && <Vertical size="xs" />}
        <Headings
          color={
            type === 'primary' || type === 'accent' ? 'inverted' : 'primary'
          }
        >
          {children}
        </Headings>
        {iconRight && children && <Vertical size="xs" />}
        {iconRight && (
          <Icon
            color={
              type === 'primary' || type === 'accent' ? 'inverted' : 'primary'
            }
            getStyles={() => {}}
            size="sm"
            type={iconRight}
          />
        )}
      </div>
      {addons && addons.append}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.type),
  isInline: PropTypes.bool,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  onCLick: PropTypes.func,
  addons: PropTypes.shape({
    prepend: PropTypes.node,
    append: PropTypes.node,
  }),
}

Button.defaultProps = {
  type: 'primary',
  isInline: false,
  getStyles: () => {},
  onClick: () => {},
}

export default withStyles(styles)(Button)