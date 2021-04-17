import React from 'react'
import punkt from './img/punkt.svg'
import galka from './img/galka.svg'
import strelka from './img/strelka.png'
import styles from './div2.module.scss';


export default function Div2() {
return (
<div className={styles.main}>
    <table>
        <tr>
            <th ><img className={styles.punkt} src={punkt}></img></th>
            <th className={styles.cl0}>Статус заявки</th>
            <th className={styles.cl1}>Вакансия</th>
            <th className={styles.cl1}>Должность</th>
            <th className={styles.cl1}>Роль</th>
            <th className={styles.cl2}>ФИО</th>
            <th className={styles.cl3}>Статус</th>
            <th className={styles.cl3}>Ставка, FTE</th>
            <th className={styles.cl3}>Функция</th>
            <th>Категория</th>
        </tr>

        <tr>
        <td><img className={styles.punkt} src={punkt}></img></td>
            <td className={styles.purple}>направлена</td>
            <td>Вакансия 2021 Q2</td>
            <td>Ведущий разработчик</td>
            <td>Ведущий разработчик</td>
            <td>Князев Николай Сергеевич</td>
            <td className={styles.purple}>потребность</td>
            <td>1,0</td>
            <td>Бренд Эльдорадо</td>
            <td>Проекты и BAU Маркетинга Эльдорадо</td>
        </tr>

        <tr>
        <td><img className={styles.punkt} src={galka}></img></td>
            <td className={styles.purple}>в работе</td>
            <td>Вакансия 2021 Q2 <img className={styles.strelka} src={strelka}></img></td>
            <td>Ведущий разработчик</td>
            <td>Ведущий разработчик</td>
            <td></td>
            <td className={styles.purple}>потребность</td>
            <td>1,0</td>
            <td>Коммерция</td>
            <td>Проекты и BAU Маркетинга Эльдорадо</td>
        </tr>



        <tr>
        <td><img className={styles.punkt} src={punkt}></img></td>
            <td className={styles.purple}>в работе</td>
            <td>Вакансия 2021 Q2</td>
            <td>Разработчик</td>
            <td>Разработчик</td>
            <td>Рогатко Алексей Владимирович</td>
            <td className={styles.purple}>потребность</td>
            <td>1,0</td>
            <td>Бренд Эльдорадо</td>
            <td>Проекты и BAU Маркетинга Эльдорадо</td>
        </tr>

        <tr>
        <td><img className={styles.punkt} src={punkt}></img></td>
            <td className={styles.purple}>закрыта</td>
            <td>Вакансия 2021 Q2 <img className={styles.strelka} src={strelka}></img></td>
            <td>Разработчик</td>
            <td>Разработчик</td>
            <td>Петров Владимир Николаевич</td>
            <td className={styles.purple}>потребность</td>
            <td>1,0</td>
            <td>Коммерция</td>
            <td>Direct Experience E</td>
        </tr>


    </table>
</div>



)

}