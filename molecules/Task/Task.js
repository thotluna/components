import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Task.module.css'
import { options, states } from './constants'
import { getClasses } from '../../helpers/styles'

import Button from '../Button'
import Title from '../../atoms/Title'
import Icon from '../../atoms/Icon'

export const Task = ({ description, newState }) => {
  const [state, setState] = useState(newState)
  const getStyles = getClasses(styles)({})

  const getTypeIcon = () => {
    switch (state) {
      case states.ACTIVE:
        return 'circle'

      case states.CULMINATED:
        return 'check'

      case states.DELETE:
        return 'close'

      default:
        return 'drag'
    }
  }

  return (
    <div className={getStyles('task')}>
      <div className={getStyles('wrapper')}>
        {state === states.ACTIVE ? (
          <Button
            ariaLabel="culminated button"
            icon={getTypeIcon()}
            id="button-trash"
            onClick={() => {
              setState(states.CULMINATED)
            }}
            value=""
          />
        ) : (
          <Icon size="md" type={getTypeIcon()} />
        )}
        <Title>{description}</Title>
      </div>
      <Button
        ariaLabel="delete button"
        icon="trash"
        id="button-trash"
        onClick={() => {}}
        value=""
      />
    </div>
  )
}

Task.propTypes = {
  description: PropTypes.string.isRequired,
  newState: PropTypes.oneOf(options.states),
}

Task.defaultProps = {
  state: states.ACTIVE,
}

export default Task
