import React from 'react'

import styles from './CssGrid.module.css'

export const SimpleGrid: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.item}>Aaa</div>
    <div className={styles.item}>Bbb</div>
    <div className={styles.item}>Ccc</div>
    <div className={styles.item}>Ddd</div>
  </div>
)

export const AreaGrid: React.FC = () => (
  <div className={[styles.container, styles.areaGrid].join(' ')}>
    <div className={styles.itemHeader}>Header</div>
    <div className={styles.itemMain}>Main</div>
    <div className={styles.itemSide}>Side</div>
    <div className={styles.itemFooter}>Footer</div>
  </div>
)
