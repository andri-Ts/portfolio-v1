import React from 'react';
import styles from './navbar.module.css';

function Logo() {
  return (
    <a href="#hero" className={styles.logo} aria-label="Retour à l'accueil">
      <span className={styles.logoBracket}>&lt;</span>
      <span className={styles.logoText}>TA</span>
      <span className={styles.logoBracket}>/&gt;</span>
    </a>
  );
}

export default Logo;
