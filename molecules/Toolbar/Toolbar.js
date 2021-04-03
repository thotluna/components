import React from 'react'
import PropTypes from 'prop-types'
import styles from './Toolbar.module.css'
import withStyles from '../../hocs/withStyles'

import Icon, { options as iconOptions } from '../../atoms/Icons'
import Heading from '../../atoms/Headings'
import { Vertical } from '../../layout/Spacer/components'

export const Toolbar = ({ icon, iconOnclick, title, getStyles }) => {
  return (
    <div className={getStyles('container')}>
      <button
        style={{ padding: 0, border: 0, backgroundColor: 'transparent' }}
        onClick={iconOnclick}
      >
        {icon && <Icon type={icon} color="inverted" size="md" />}
      </button>
      <Vertical size="sm" />
      {title && (
        <Heading color="inverted" size="lg">
          {title}
        </Heading>
      )}
    </div>
  )
}

Toolbar.propTypes = {
  getStyles: PropTypes.func.isRequired,
  iconOnclick: PropTypes.func,
  icon: PropTypes.oneOf(iconOptions.type),
  title: PropTypes.string,
}

Toolbar.defaultProps = {
  iconOnclick: () => {},
}

export default withStyles(styles)(Toolbar)
