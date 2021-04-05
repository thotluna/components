import React from 'react'
import PropTypes from 'prop-types'
import styles from './ToggelDark.module.css'
import withStyles from '../../hocs/withStyles'

import Icon from '../Icons'

export const ToggelDark = ({ name, isChecked, onChange, getStyles }) => {
  return (
    <div className={getStyles('container-mode')}>
      <input
        className={getStyles('Toggel')}
        aria-label={name}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        aria-pressed={isChecked}
        role="button"
      />

      <div className={getStyles('night')}>
        <Icon type="moon" color="inverted" />
      </div>
      <div className={getStyles('day')}>
        <Icon type="sun" color="sun" />
      </div>
    </div>
  )
}

ToggelDark.propTypes = {
  name: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool,
}

ToggelDark.defaultProps = {
  isChecked: false,
}

export default withStyles(styles)(ToggelDark)
