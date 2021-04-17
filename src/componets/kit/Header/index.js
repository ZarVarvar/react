import React from 'react'
import logo from './img/standart.svg'
import kvadrat from './img/Vector.svg'
import lupa from './img/lupa.svg'
import top from './img/topframe.svg'
import styles from './abc.module.scss';

export default function Header() {
    return (
        <div>
          <img  className={styles.logo} src={logo} alt=""/> 
          <div className={styles.kvadratlupa}><img className={styles.kvadrat} src={kvadrat} alt="" /> <span className={styles.textimg} className>Сервисы</span>
          <img  className={styles.lupa} src={lupa} alt=""/> <span className={styles.textimg}>Поиск</span></div>
          <img className={styles.top} src={top} alt=""/>
         </div>

    )
}
