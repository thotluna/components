import React from 'react'
import PropTypes from 'prop-types'
import styles from './InputTask.module.css'
import { options, status } from './constants'
import { getClasses } from '../../helpers/styles'

import Input from '../Input'
import Title from '../../atoms/Title'
import useInputTask from './useInputTask'
import Icon from '../../atoms/Icon'

export const InputTask = ({ children, statusInitial, handelOnCreted }) => {
  const getStyles = getClasses(styles)({})
  const {
    statusCurrent,
    setStatus,
    task,
    setTask,
    hadelOnEnter,
    inputRef,
    handelCreating,
  } = useInputTask(statusInitial, handelOnCreted)

  return (
    <>
      {statusCurrent === status.STATUS_STANDBY && (
        <div
          className={getStyles('inputTask')}
          tabIndex="0"
          onFocus={handelCreating}
        >
          <Icon type="plus" />
          <Title size="md">{children}</Title>
        </div>
      )}
      {statusCurrent === status.STATUS_CREATING && (
        <Input
          id="input"
          keyEnterMessage="Enter for continued"
          label="input"
          placeholder="is placeholder"
          value={task}
          handelOnChange={(e) => setTask(e.target.value)}
          handelOnKeyPress={hadelOnEnter}
          ref={inputRef}
          onBlur={() => setStatus(status.STATUS_STANDBY)}
        />
      )}
    </>
  )
}

InputTask.propTypes = {
  children: PropTypes.string.isRequired,
  statusInitial: PropTypes.oneOf(options.status).isRequired,
  handelOnCreted: PropTypes.func.isRequired,
}

InputTask.defaultProps = {}

export default InputTask
