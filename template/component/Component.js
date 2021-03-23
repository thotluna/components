import React from 'react'
import PropTypes from 'prop-types'
import styles from './Componet.module.css'

function Componet({ children }) {
  return <div className={styles.componet}>{children}</div>
}

Componet.propTypes = {
  children: PropTypes.node,
}

Componet.defaultProps = {}

export default Componet
