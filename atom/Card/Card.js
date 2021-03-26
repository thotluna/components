import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'

function Card({ children }) {
  return <div className={styles.container}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node,
}

Card.defaultProps = {}

export default Card
