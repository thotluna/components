import React from 'react'
import PropTypes from 'prop-types'
import { styles, options } from '.'
import { getClasses } from '../../helpers/styles'

import Icon from '../../atoms/Icon'
import Title from '../../atoms/Title'
import Button from '../Button'
import { statusTask } from './constants'

export const Task = ({ children, status, handelOnDelete, handelOnCheck }) => {
  const getStyles = getClasses(styles)({ status })

  return (
    <div className={getStyles('task', ['status'])}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '2rem',
        }}
      >
        {(status === statusTask.FIRST ||
          status === statusTask.SECOND ||
          status === statusTask.PENDING) && <Icon type="drag" />}
        {status === statusTask.ACTIVE && (
          <Button
            id="Delete task"
            ariaLabel="Delete task"
            icon="circle"
            onClick={handelOnCheck}
            value=""
          />
        )}
        {status === statusTask.CULMINATED && <Icon type="check" />}
        <Title size="md">{children + ' ' + status}</Title>
      </div>
      {(status === statusTask.FIRST ||
        status === statusTask.SECOND ||
        status === statusTask.PENDING) && (
        <Button
          id="Delete task"
          ariaLabel="Delete task"
          icon="trash"
          onClick={handelOnDelete}
          value=""
        />
      )}
    </div>
  )
}

Task.propTypes = {
  children: PropTypes.node.isRequired,
  handelOnDelete: PropTypes.func.isRequired,
  handelOnCheck: PropTypes.func.isRequired,
  status: PropTypes.oneOf(options.status),
}

Task.defaultProps = {
  status: statusTask.ACTIVE,
}

export default Task
