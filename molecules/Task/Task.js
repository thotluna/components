import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Spacer from '../../layout/Spacer'
import Card from '../../atoms/Card'
import Paragraph from '../../atoms/Paragraph'
import Icon from '../../atoms/Icons'

import styles from './Task.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'
import Buttons from '../Buttons'
import Check from '../../atoms/Check'

const handleCheck = ({ isChecked, setIsChecked, isPending, onCheck }) => () => {
  if (!isPending) {
    setIsChecked(!isChecked)
    onCheck(!isChecked)
  }
}

export const Task = ({
  id,
  children,
  defaultIsChecked,
  onCheck,
  onDelete,
  getStyles,
  isPending,
  tabIndex,
}) => {
  const [isChecked, setIsChecked] = useState(defaultIsChecked && !isPending)

  return (
    <div className={getStyles('container')}>
      <Card
        id={`card-${id}`}
        onClick={handleCheck({ isChecked, setIsChecked, isPending, onCheck })}
        isClickable={!isPending}
        isDraggable={isPending}
      >
        <div
          className={getStyles('task', ['type'], {
            'is-checked': isChecked,
          })}
        >
          <div className={getStyles('content')}>
            {isPending ? (
              <Icon type="drag" hasBorder={true} size="md" />
            ) : (
              <Check
                id={`card-${id}`}
                name={`check: ${children}`}
                color="primary"
                isChecked={isChecked}
                tabIndex={tabIndex}
                // onChenge={onCheck}
              />
            )}
            <Spacer.Vertical size="xs" />
            <Paragraph
              color={isChecked ? 'muted' : 'base'}
              weight="medium"
              isStriked={isChecked}
            >
              {children}
            </Paragraph>
          </div>
          <Spacer.Vertical size="sm" />
          <div onClick={(event) => event.stopPropagation()}>
            <Buttons
              id={`button-${id}`}
              ariaLabel="delete-task"
              isOnlyIcon
              color="inverted"
              size="mini"
              icon="trash"
              onCLick={onDelete}
              tabIndex={tabIndex}
            />
          </div>
        </div>
      </Card>
    </div>
  )
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  defaultIsChecked: PropTypes.bool,
  isPending: PropTypes.bool,
  tabIndex: PropTypes.number,
}

Task.defaultProps = {
  defaultChecked: false,
  tabIndex: 0,
}

export default withStyles(styles)(Task)
