/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Nav.module.scss';

export const Nav: React.FC<{ collapse: boolean }> = ({
  children,
  collapse,
}) => {
  return (
    <nav className={`${styles.nav} ${collapse ? styles.hide : ''}`}>
      {children}
    </nav>
  );
};
