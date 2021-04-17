import React from 'react'
import styles from './div1.module.scss';


export default function Div1() {
    return (
        <div>
      <p className={styles.potr}>Потребности</p>
      <div className={styles.div1}><span className={styles.zayvki}>Заявки</span><span className={styles.arhiv}>Архив</span>
      <span className={styles.dubl}>ДУБЛИРОВАТЬ</span><span className={styles.otozvaty}>ОТОЗВАТЬ</span></div>
        </div>

        

    )

    }