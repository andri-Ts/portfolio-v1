import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SocialLinks from '../../ui/socialLinks/SocialLinks';
import styles from './navbar.module.css';

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
    // Récupère toutes les balises <section> de la page
    const observedSections = document.querySelectorAll('section');

    // Crée un observateur qui sera notifié lorsqu'une section entre ou sort de la zone visible de l'écran
    const observer = new IntersectionObserver((entries) => {
      // Parcourt les sections dont la visibilité a changé
      for (const entry of entries) {
        // Si la section est actuellement visible
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          break; // Une seule section active nous suffit
        }
      }
    });

    // Demande à l'observateur de surveiller chaque section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Nettoyage : arrête l'observation lorsque le composant est démonté
    return () => {
      observer.disconnect();
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
