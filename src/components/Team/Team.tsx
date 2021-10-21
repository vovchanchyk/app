import React from 'react';
import img1 from './teamimgfirst.png';
import img2 from './teamimgsecond.png';
import styles from './Team.module.scss';
export const Team = () => {
    return (
        <div className={styles.team}>
        <h3 className={styles.team__title}>
          Our team
        </h3>
        <div className={styles.team__cols}>
          <div className={styles.team__col}>
            <img src={img1} alt="" className={styles.team__img}></img>
            <div className={styles.team__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Augue molestie pretium, dictum nunc ac pellentesque. Semper imperdiet elit, nec faucibus varius dui. 
              Lorem non sed tincidunt pharetra tempor. Amet proin sapien consequat orci, mauris.Lorem ipsum
            </div>
            <span className={styles.team__more}>
              Learn more
            </span>
          </div>
          <div className={styles.team__col}>
            <img src={img2} alt="" className={styles.team__img}></img>
            <div className={styles.team__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Augue molestie pretium, dictum nunc ac pellentesque. Semper imperdiet elit, nec faucibus varius dui. 
              Lorem non sed tincidunt pharetra tempor. Amet proin sapien consequat orci, mauris.Lorem ipsum
            </div>
            <span className={styles.team__more}>
              Learn more
            </span>
          </div>
        </div>  
      </div>
    )
}

