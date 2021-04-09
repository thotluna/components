import React from 'react'
import PropTypes from 'prop-types'
import styles from './SeparatorLine.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'
import Title from '../Title'

export const SeparatorLine = ({ title, isShowTitle, color, size }) => {
  const getStyles = getClasses(styles)({ color, size })
  return (
    <div className={getStyles('container-separator', ['color'])}>
      <hr
        title={title}
        className={getStyles('separator-line', ['color', 'size'])}
      />
      {isShowTitle && (
        <div className={getStyles('title')}>
          <Title size="sm" color={color}>
            {title}
          </Title>
        </div>
      )}
    </div>
  )
}

SeparatorLine.propTypes = {
  title: PropTypes.string.isRequired,
  isShowTitle: PropTypes.bool,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
}

SeparatorLine.defaultProps = {
  size: 'sm',
  color: 'primary',
  isShowTitle: false,
}

export default SeparatorLine
