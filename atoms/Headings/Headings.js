import React from 'react'
import PropTypes from 'prop-types'
import styles from './Headings.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

export const Headings = ({ children, getStyles }) => {
  return (
    <header className={getStyles('headings', ['color', 'size', 'weight'])}>
      {children}
    </header>
  )
}

Headings.propTypes = {
  children: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  weight: PropTypes.oneOf(options.weights),
}

Headings.defaultProps = {
  color: 'base',
  size: 'md',
  weight: 'bold',
}

export default withStyles(styles)(Headings)
