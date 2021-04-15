import React from 'react'
import PropTypes from 'prop-types'
import styles from './Toolbar.module.css'
import { getClasses } from '../../helpers/styles'

import Button from '../Button'
import Title from '../../atoms/Title'
import Menu from '../Menu'

export const Toolbar = ({ children, listLink, onBack }) => {
  const getStyles = getClasses(styles)({})
  return (
    <div className={getStyles('toolbar')}>
      <div className={getStyles('tookbar-content')}>
        {onBack && (
          <Button
            id="back-button"
            ariaLabel="back-button"
            icon="left-chevron"
            handelOnClick={onBack}
          />
        )}
        <Title size="lg">{children}</Title>
      </div>
      <Menu listLink={listLink} position="right" />
    </div>
  )
}

Toolbar.propTypes = {
  children: PropTypes.string,
  listLink: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onBack: PropTypes.func,
}

Toolbar.defaultProps = {}

export default Toolbar
