import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SocialLinks from '../../ui/socialLinks/SocialLinks';
import styles from './navbar.module.css';

const NAVBAR_SHADOW_SCROLL = 10;
const ACTIVE_SECTION_OFFSET = 120;

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  //----------------------------
  // Gérer l'ombre de la Navbar.
  //----------------------------
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

  //------------------------
  // Observer les sections.
  //------------------------
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = document.querySelectorAll('section');

      // Si on est tout en bas de la page,
      // la dernière section devient active.
      const isBottomPage =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isBottomPage) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= ACTIVE_SECTION_OFFSET &&
          rect.bottom >= ACTIVE_SECTION_OFFSET
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Vérifie la section active au chargement
    handleActiveSection();

    // Vérifie la section active pendant le scroll
    window.addEventListener('scroll', handleActiveSection, {
      passive: true,
    });

    // Nettoyage
    return () => {
      window.removeEventListener('scroll', handleActiveSection);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${hasScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        <Logo />
        <Navigation activeSection={activeSection} />
        <SocialLinks />
      </div>
    </header>
  );
}

export default Navbar;
