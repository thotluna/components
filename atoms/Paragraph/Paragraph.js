import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '.'
import withStyles from '../../hocs/withStyles'

export const Paragraph = ({ children, getStyles }) => {
  return <div className={getStyles('container')}>{children}</div>
}

Paragraph.propTypes = {
  children: PropTypes.node,
  getStyles: PropTypes.func.isRequired,
}

Paragraph.defaultProps = {}

export default withStyles(styles)(Paragraph)
