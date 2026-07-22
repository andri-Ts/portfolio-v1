import React from 'react';
import { navLinks } from '../../../constants/navLinks';
import SocialLinks from '../../ui/socialLinks/SocialLinks';
import styles from './navbar.module.css';

function Navigation({ activeSection, isMenuOpen, setIsMenuOpen }) {
  // return (
  //   <>
  //     {/* Overlay */}
  //     <div
  //       className={`${styles.overlay} ${
  //         isMenuOpen ? styles.overlayVisible : ''
  //       }`}
  //       onClick={() => setIsMenuOpen(false)}
  //     />

  //     {/* Navigation */}
  //     <nav
  //       className={`${styles.navigation} ${
  //         isMenuOpen ? styles.navigationOpen : ''
  //       }`}
  //     >
  //       <ul className={styles.navigationList}>
  //         {navLinks.map((navLink) => (
  //           <li key={navLink.id}>
  //             <a
  //               href={`#${navLink.id}`}
  //               className={activeSection === navLink.id ? styles.active : ''}
  //               onClick={() => setIsMenuOpen(false)}
  //             >
  //               {navLink.label}
  //             </a>
  //           </li>
  //         ))}
  //       </ul>

  //       <div className={styles.mobileSocial}>
  //         <SocialLinks />
  //       </div>
  //     </nav>
  //   </>
  // );

  return (
    <nav className={`${styles.navigationWrapper}`}>
      <div
        className={`${styles.overlay} ${
          isMenuOpen ? styles.overlayVisible : ''
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`${styles.navigation} ${
          isMenuOpen ? styles.navigationOpen : ''
        }`}
      >
        <ul className={styles.navigationList}>
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <a
                href={`#${navLink.id}`}
                className={activeSection === navLink.id ? styles.active : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.mobileSocial}>
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
