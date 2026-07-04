import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SocialLinks from '../../ui/socialLinks/SocialLinks';
import styles from './navbar.module.css';

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Creation de la fonc qui detecte combien de scorll
    const handleScroll = () => {
      const shouldShowShadow = window.scrollY > 10;
      setHasScrolled(shouldShowShadow); // Met à jour l'état selon la position du scroll
    };

    // Appel de la fonction à la detection de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // clean le listener à la destruction du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${hasScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        <Logo />
        <Navigation />
        <SocialLinks />
      </div>
    </header>
  );
}

export default Navbar;
