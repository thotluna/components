import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '.'
import withStyles from '../../hocs/withStyles'
import Title from '../../atoms/Title'
import Buttons from '../Buttons'
import Separator from '../../atoms/SeparatorLine'
import Spacer from '../../layout/Spacer'

export const Modal = ({
  children,
  title,
  onClose,
  withFooter,
  onCancel,
  onAccept,
  getStyles,
  isPlayground,
}) => {
  return (
    <div
      className={getStyles('modal', {
        'is-playground': isPlayground,
      })}
    >
      <>
        <div className={getStyles('modal-title')}>
          <div>
            {title && (
              <Title color="primary" size="lg">
                {title}
              </Title>
            )}
          </div>
          <Buttons
            ariaLabel="button"
            color="inverter"
            icon="close"
            onCLick={onClose}
            size="short"
            withoutBorder
          />
        </div>
        <Spacer.Horizontal size="xs" />
        <Separator size="xs" title="Head finish" />
      </>

      <div className={getStyles('modal-body')}>{children}</div>
      {withFooter && (
        <>
          <Separator size="xs" title="footer" />
          <Spacer.Horizontal size="xm" />
          <div className={getStyles('modal-footer')}>
            <Buttons
              ariaLabel="button"
              color="inverter"
              onClick={onCancel}
              size="short"
            >
              Cancel
            </Buttons>
            <Buttons ariaLabel="button" onClick={onAccept} size="short">
              Aceptar
            </Buttons>
          </div>
        </>
      )}
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  withFooter: PropTypes.bool,
  onCancel: PropTypes.func,
  onAccept: PropTypes.func,
  title: PropTypes.string,
  isPlayground: PropTypes.bool,
}

Modal.defaultProps = {
  withFooter: false,
  isPlayground: false,
}

export default withStyles(styles)(Modal)
