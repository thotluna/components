import React from 'react'
import PropTypes from 'prop-types'
import styles from './TasksCounter.module.css'
import withStyles from '../../hocs/withStyles'

import SeparatorLine from '../../atoms/SeparatorLine'
import Title, { options } from '../../atoms/Title'

export const TasksCounter = ({ message, color, current, total, getStyles }) => {
  const counter = `${current}/${total}`
  return (
    <div className={getStyles('container-counter')}>
      <div className={getStyles('messages')}>
        <Title color={color}>{message}</Title>
        <Title color={color}>{counter}</Title>
      </div>
      <SeparatorLine title="Task Counter" color={color} />
    </div>
  )
}

TasksCounter.propTypes = {
  getStyles: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  color: PropTypes.oneOf(options.colors),
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

TasksCounter.defaultProps = {
  message: 'test',
  current: 10,
  total: 10,
}

export default withStyles(styles)(TasksCounter)
