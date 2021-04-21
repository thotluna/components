import React from 'react'
import PropTypes from 'prop-types'
import styles from './Task.module.css'
import { getClasses } from '../../helpers/styles'

import Button from '../Button'
import Title from '../../atoms/Title'
import Icon from '../../atoms/Icon'
import Checkbox from '../../atoms/Checkbox'

const handelDelete = ({ idTask, onDelete }) => () => {
  onDelete(idTask)
}

export const Task = ({
  idTask,
  position,
  description,
  isChecked,
  isPending,
  onChecked,
  onDelete,
}) => {
  const getStyles = getClasses(styles)({})

  return (
    <div
      className={getStyles('task', {
        'is-first': position === 0 && !isChecked,
        'is-second': position === 1 && !isChecked,
      })}
    >
      <div className={getStyles('wrapper')}>
        {isPending ? (
          <Icon type="drag" size="md" />
        ) : (
          <Checkbox
            ariaLabel="check"
            id="check"
            isChecked={isChecked}
            onChecked={onChecked}
          />
        )}

        <Title>{description}</Title>
      </div>
      <Button
        ariaLabel="delete button"
        icon="trash"
        id="button-trash"
        sizeIcon="sm"
        handelOnClick={handelDelete({ idTask, onDelete })}
        value=""
      />
    </div>
  )
}

Task.propTypes = {
  idTask: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.number,
  isChecked: PropTypes.bool,
  isPending: PropTypes.bool,
  onChecked: PropTypes.func,
  onDelete: PropTypes.func,
}

Task.defaultProps = {
  isChecked: false,
  isPending: true,
}

export default Task
