import React from 'react';
import icon from './check_24px.png';
import styles from './Skills.module.scss';

export const Skills = () => {
    return (
        <div className={styles.skills}>
            <h3 className={styles.skills__title}>
            Testing skills
            </h3>
            <div className={styles.skills__body}>
            
                <div className={styles.skills__column}>

                    <div className={styles.skills__item}>
                        <div className={styles.skills__icon}>
                            <img src={icon} alt="icon" className={styles.skills__img}></img>
                         </div>
                    Applying HTML, CSS/SASS. Markup implementation.</div>
                        <div className={styles.skills__item}>
                        <div className={styles.skills__icon}>
                            <img src={icon} alt="icon" className={styles.skills__img}></img>
                         </div>
                            Applying JS. Transforming and organising data. Interactions.</div>
                    </div>


                        <div className={styles.skills__circle}>
                            <div className={styles.skills__quatro1}>
                                <div className={styles.skills__quatrotext}>TTP/REST</div>
                            </div>
                            <div className={styles.skills__quatro2}>
                                <div className={styles.skills__quatrotext}>Vue/React</div>
                            </div>
                            <div className={styles.skills__quatro3}>
                                <div className={styles.skills__quatrotext}>JS</div>
                            </div>
                            <div className={styles.skills__quatro4}>
                                <div className={styles.skills__quatrotext}>HTML, CSS/SASS</div>
                            </div>
                        </div>

                    <div className={styles.skills__column}>

                        <div className={styles.skills__item}>
                             <div className={styles.skills__icon}>
                            <img src={icon} alt="icon" className={styles.skills__img}></img>
                         </div>
                            Working with asynchronous code, HTTP and the REST architecture</div>
                        <div className={styles.skills__item}>
                             <div className={styles.skills__icon}>
                            <img src={icon} alt="icon" className={styles.skills__img}></img>
                         </div>
                            Using one of the modern front-end frameworks either Vue or React. Vue is preferable but React is also viable.</div>
                    </div>
                </div>
     </div>
    )
}


