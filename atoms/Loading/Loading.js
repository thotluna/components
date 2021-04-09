import React from 'react'
import styles from './Loading.module.css'
import { getClasses } from '../../helpers/styles'

export const Loading = () => {
  const getStyles = getClasses(styles)({})
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

Loading.propTypes = {}

Loading.defaultProps = {}

export default Loading
