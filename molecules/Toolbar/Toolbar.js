import React from 'react'
import PropTypes from 'prop-types'
import styles from './Toolbar.module.css'

import Icon, { options as iconOptions } from '../../atoms/Icons'
import Title from '../../atoms/Title'
import { Vertical } from '../../layout/Spacer/components'
import { getClasses } from '../../helpers/styles'

export const Toolbar = ({ icon, label, iconOnclick, title }) => {
  const getStyles = getClasses(styles)({})
  return (
    <div className={getStyles('container')}>
      <button
        aria-label={label}
        style={{ padding: 0, border: 0, backgroundColor: 'transparent' }}
        onClick={iconOnclick}
      >
        {icon && (
          <Icon
            arial-hiden={icon ? false : true}
            type={icon}
            color="inverted"
            size="md"
          />
        )}
      </button>
      <Vertical size="sm" />
      {title && (
        <Title arial-hiden={title ? false : true} color="button" size="lg">
          {title}
        </Title>
      )}
    </div>
  )
}

Toolbar.propTypes = {
  label: PropTypes.string.isRequired,
  iconOnclick: PropTypes.func,
  icon: PropTypes.oneOf(iconOptions.type),
  title: PropTypes.string,
}

Toolbar.defaultProps = {}

export default Toolbar
