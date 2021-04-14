import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Menu.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'

import Button from '../Button'

export const Menu = ({ listLink, active, position }) => {
  const [show, setShow] = useState(active)
  const getStyles = getClasses(styles)({ position })
  return (
    <nav className={getStyles('menu')}>
      <Button
        ariaLabel="menu"
        icon="menu"
        id="menu"
        handelOnClick={() => {
          setShow(!show)
        }}
      />
      {show && (
        <div className={getStyles('menu-list-items', ['position'])}>
          {listLink.length &&
            listLink.map((item, index) => (
              <div key={index} className={getStyles('menu-item')}>
                <a
                  onClick={() => setShow(!show)}
                  aria-current={item.name}
                  href={item.link}
                >
                  {item.name}
                </a>
              </div>
            ))}
        </div>
      )}
    </nav>
  )
}

Menu.propTypes = {
  listLink: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  position: PropTypes.oneOf(options.position),
  active: PropTypes.bool,
}

Menu.defaultProps = {
  position: 'left',
  active: false,
}

export default Menu
