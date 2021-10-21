import React from 'react';

import img from './Rectangle.png';
import styles from './Description.module.scss';

export const Description = () => {
    return (
        <div className={styles.description}>
    <div className={styles.description__left}>
      <h4 className={styles.description__title}>
        General description of the assignment
      </h4>
      <div className={styles.description__items}>
        <div className={styles.description__item}>
          <div className={styles.description__number}>
            01
          </div>
          <div className={styles.description__text}>Loremn ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className={styles.description__item}>
          <div className={styles.description__number}>
            02
          </div>
          <div className={styles.description__text}>Loremn ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</div>
        </div>

   

        <div className={styles.description__item}>
          <div className={styles.description__number}>
            03
          </div>
          <div className={styles.description__text}>Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
    </div>
    <div className={styles.description__right}>
      <img src={img} alt="" className={styles.description__img}></img>
    </div>

  </div>

    )
}

