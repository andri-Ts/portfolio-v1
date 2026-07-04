import React from 'react';
import { navLinks } from '../../../constants/navLinks';

function Navigation() {
  return (
    <nav>
      <ul>
        {navLinks.map((navLink) => (
          <li key={navLink.id}>
            <a href={`#${navLink.id}`}>{navLink.lable}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
