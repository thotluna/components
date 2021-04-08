import React from 'react'
import PropTypes from 'prop-types'
import styles from './Snackbar.module.css'
import { options } from './constants'
import { getColorSeting } from './constants'

import Buttons from '../Buttons'
import Heading from '../../atoms/Headings'
import Icon from '../../atoms/Icons'
import { getClasses } from '../../helpers/styles'

export const Snackbar = ({ children, type, onClose }) => {
  const getStyle = getColorSeting(type)
  const color = getStyle.background
  const classStyles = getClasses(styles)({ color })

  return (
    <div className={classStyles('snackbar', ['color'])}>
      <div className={classStyles('snackbar-body')}>
        <div className={classStyles('snackbar-left')}>
          <Icon type="trash" size="lg" color={getStyle.colorIcon} />
          <Heading size="md" color={getStyle.colorText}>
            {children}
          </Heading>
        </div>
        <Buttons
          ariaLabel="button"
          color={color}
          icon="close"
          onCLick={onClose}
          size="short"
          withoutBorder
        />
      </div>
      <div className={classStyles('snackbar-body')}></div>
    </div>
  )
}

Snackbar.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(options.types).isRequired,
  onClose: PropTypes.func,
}

Snackbar.defaultProps = {
  type: 'alert',
}

export default Snackbar
