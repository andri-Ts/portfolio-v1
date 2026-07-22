import React, { useEffect, useState } from 'react';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';

import Logo from './Logo';
import Navigation from './Navigation';
import SocialLinks from '../../ui/socialLinks/SocialLinks';

import styles from './navbar.module.css';

const ACTIVE_SECTION_OFFSET = 120;

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ombre navbar
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Section active
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = document.querySelectorAll('section');

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

    handleActiveSection();

    window.addEventListener('scroll', handleActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleActiveSection);
    };
  }, []);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`${styles.header} ${hasScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        <Logo />

        <Navigation
          activeSection={activeSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <div className={styles.desktopSocial}>
          <SocialLinks />
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
