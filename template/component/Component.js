import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '.'
import withStyles from '../../hocs/withStyles'

export const Componet = ({ children, getStyles }) => {
  return <div className={getStyles('container')}>{children}</div>
}

Componet.propTypes = {
  children: PropTypes.node,
  getStyles: PropTypes.func.isRequired,
}

Componet.defaultProps = {}

export default withStyles(styles)(Componet)
