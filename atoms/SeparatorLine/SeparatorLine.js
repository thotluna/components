import React from 'react'
import PropTypes from 'prop-types'
import styles from './SeparatorLine.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

import Heading from '../Headings'

export const SeparatorLine = ({ title, color, getStyles }) => {
  return (
    <div className={getStyles('container-separator', ['color'])}>
      <hr
        title={title}
        className={getStyles('separator-line', ['color', 'size'])}
      />
      {title && (
        <div className={getStyles('title')}>
          <Heading color={color}>{title}</Heading>
        </div>
      )}
    </div>
  )
}

SeparatorLine.propTypes = {
  getStyles: PropTypes.func.isRequired,
  title: PropTypes.string,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
}

SeparatorLine.defaultProps = {
  title: 'separator',
  size: 'sm',
  color: 'primary',
}

export default withStyles(styles)(SeparatorLine)