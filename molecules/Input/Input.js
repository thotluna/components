import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'

import Title from '../../atoms/Title'
import Icon from '../../atoms/Icon'

export const Input = forwardRef(
  (
    {
      id,
      label,
      isShowLabel,
      placeholder,
      value,
      handelOnChange,
      color,
      keyEnterMessage,
      handelOnKeyPress,
      errorMessage,
      isError,
      isCompact,
    },
    ref
  ) => {
    const getStyles = getClasses(styles)({ color })

    const handelOnEnter = (e) => {
      if (e.code === 'Enter') {
        handelOnKeyPress()
      }
    }

    return (
      <div
        className={getStyles('input-container', { 'is-compact': isCompact })}
      >
        {isShowLabel && (
          <label
            htmlFor={id}
            aria-labelledby={id}
            className={getStyles('input-label', ['color'], {
              'is-error': isError,
            })}
          >
            {label}
          </label>
        )}
        <div className={getStyles('input-wrap')}>
          <div
            className={getStyles('input-frame', ['color'], {
              'is-error': isError,
            })}
          >
            <input
              id={id}
              name={id}
              aria-label={id}
              className={getStyles('input', ['color'])}
              placeholder={placeholder}
              value={value}
              onChange={handelOnChange}
              onKeyPress={handelOnEnter}
              ref={ref}
            />
            {isError && <Icon type="alert" color="error" size="sm" />}
            {!isError && !isCompact && keyEnterMessage && (
              <div className={getStyles('input-message')}>
                <Title size="sm" color="primary">
                  {keyEnterMessage}
                </Title>
              </div>
            )}
          </div>
          {isError && (
            <div className={getStyles('input-error')}>
              <Title size="sm" color="error">
                {errorMessage}
              </Title>
            </div>
          )}
        </div>
      </div>
    )
  }
)

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isCompact: PropTypes.bool,
  isShowLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handelOnChange: PropTypes.func,
  color: PropTypes.oneOf(options.colors),
  keyEnterMessage: PropTypes.string,
  handelOnKeyPress: PropTypes.func,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
}

Input.defaultProps = {}

export default Input
