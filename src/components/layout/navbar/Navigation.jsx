import React from 'react';
import { navLinks } from '../../../constants/navLinks';
import styles from './navbar.module.css';

function Navigation({ activeSection }) {
  return (
    <nav className={styles.navigation}>
      <ul>
        {navLinks.map((navLink) => (
          <li key={navLink.id}>
            <a
              href={`#${navLink.id}`}
              className={activeSection === navLink.id ? styles.active : ''}
            >
              {navLink.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
