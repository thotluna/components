import React from 'react'
import PropTypes from 'prop-types'
import styles from './Toolbar.module.css'
import withStyles from '../../hocs/withStyles'

import Icon, { options as iconOptions } from '../../atoms/Icons'
import Heading from '../../atoms/Headings'
import { Vertical } from '../../layout/Spacer/components'

export const Toolbar = ({ icon, label, iconOnclick, title, getStyles }) => {
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
        <Heading arial-hiden={title ? false : true} color="inverted" size="lg">
          {title}
        </Heading>
      )}
    </div>
  )
}

Toolbar.propTypes = {
  getStyles: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  iconOnclick: PropTypes.func,
  icon: PropTypes.oneOf(iconOptions.type),
  title: PropTypes.string,
}

Toolbar.defaultProps = {
  iconOnclick: () => {},
}

export default withStyles(styles)(Toolbar)
