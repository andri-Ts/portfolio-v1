import React from 'react';
import { navLinks } from '../../../constants/navLinks';
import styles from './navbar.module.css';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        {navLinks.map((navLink) => (
          <li key={navLink.id}>
            <a href={`#${navLink.id}`}>{navLink.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
