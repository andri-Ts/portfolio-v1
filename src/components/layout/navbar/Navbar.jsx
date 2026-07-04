import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SocialLinks from '../../ui/socialLinks/SocialLinks';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navigation />
        <SocialLinks />
      </div>
    </header>
  );
}

export default Navbar;
