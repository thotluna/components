import React from 'react'
import PropTypes from 'prop-types'
import styles from './Loading.module.css'
import withStyles from '../../hocs/withStyles'

export const Loading = ({ getStyles }) => {
  return (
    <div className={getStyles('loading')}>
      <div className={getStyles('loading-object')}></div>
      <div className={getStyles('loading-object')}></div>
      <div className={getStyles('loading-object')}></div>
      <div className={getStyles('loading-object')}></div>
      <div className={getStyles('loading-object')}></div>
      <div className={getStyles('loading-object')}></div>
      <div className={getStyles('loading-object')}></div>
      <div className={getStyles('loading-object')}></div>
    </div>
  )
}

Loading.propTypes = {
  getStyles: PropTypes.func.isRequired,
}

Loading.defaultProps = {}

export default withStyles(styles)(Loading)
