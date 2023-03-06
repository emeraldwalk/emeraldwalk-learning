import React from 'react'

import styles from './css-grid.module.css'

export interface CssGridProps {}

const CssGrid: React.FC<CssGridProps> = () => (
  <div className={styles.container}>
    <div className={styles.item}>Aaa</div>
    <div className={styles.item}>Bbb</div>
    <div className={styles.item}>Ccc</div>
    <div className={styles.item}>Ddd</div>
  </div>
)

export default CssGrid
