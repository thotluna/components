import React from 'react'
import PropTypes from 'prop-types'
import styles from './TasksCounter.module.css'
import { options } from './constants'

import SeparatorLine from '../../atoms/SeparatorLine'
import Title from '../../atoms/Title'

import { getClasses } from '../../helpers/styles'

export const TasksCounter = ({ message, color, current, total }) => {
  const counter = `${current}/${total}`
  const getStyles = getClasses(styles)({})
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

export default TasksCounter
