import React from 'react'
import PropTypes from 'prop-types'
import { options } from './constants'
import styles from './Snackbar.module.css'
import { getClasses } from '../../helpers/styles'
import Title from '../../atoms/Title'
import Icon, { options as optionIcon } from '../../atoms/Icon'
import Spacer from '../../layout/Spacer'
import Button from '../Button/Button'

export const Snackbar = ({ children, color, icon }) => {
  const getStyles = getClasses(styles)({ color })
  return (
    <div className={getStyles('snackbar')}>
      <div className={getStyles('snackbar-content', ['color'])}>
        <div className={getStyles('snackbar-left')}>
          <Icon
            type={icon}
            size="md"
            color={color === 'secondary' ? 'error' : color}
          />
          <Spacer.Vertical size="sm" />
          <Title color={color === 'secondary' ? 'error' : color} size="md">
            {children}
          </Title>
        </div>
        <Button
          ariaLabel="close"
          id="button-close"
          icon="close"
          color={color === 'secondary' ? 'error' : color}
        />
      </div>
    </div>
  )
}

Snackbar.propTypes = {
  icon: PropTypes.oneOf(optionIcon.types).isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(options.colors),
}

Snackbar.defaultProps = {}

export default Snackbar
