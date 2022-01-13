import React from 'react'
import styles from './GameGrid.module.css'

export default function GameGrid() {
  var tiles = []
  for (var i = 0; i < 100; i++) {
    tiles.push(<div>*</div>)
  }
  return <div className={styles['grid']}>{tiles}</div>
}
