import React from 'react';
import styles from './footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.thanks}>Merci de votre visite.</p>

        <p className={styles.copyright}>
          © {currentYear} T.A. — Développé avec React.js
        </p>
      </div>
    </footer>
  );
}

export default Footer;
