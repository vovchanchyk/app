import React from 'react';
import logo from './Logo.png';
import styles from './Offer.module.scss';

export const Offer = () => {
  return (
    <div className={styles.offer}>
      <div className={styles.offer__brand}>
        <img src={logo} alt='' />
      </div>
      <h1 className={styles.offer__title}>Tezos Ukraine</h1>
      <p className={styles.offer__subtitle}>
        Front-end development test assignment
      </p>
    </div>
  );
};
