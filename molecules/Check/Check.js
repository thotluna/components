import React from 'react'
import PropTypes from 'prop-types'
import styles from './Check.module.css'
import withStyles from '../../hocs/withStyles'

import Buttons from '../Buttons'

export const Check = ({ isChecked, getStyles }) => {
  return (
    <Buttons
      ariaLabel="check"
      className={getStyles()}
      isOnlyIcon
      color="inverter"
      size="mini"
      icon={isChecked ? 'check' : null}
    />
  )
}

Check.propTypes = {
  isChecked: PropTypes.bool,
  getStyles: PropTypes.func.isRequired,
}

Check.defaultProps = {
  isChecked: false,
}

export default withStyles(styles)(Check)
