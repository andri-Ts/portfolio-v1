import React from 'react';
import styles from './socialLinks.module.css';
import { socialLinks } from '../../../constants/socialLinks';

function SocialLinks() {
  return (
    <div className={styles.socialLink}>
      <ul>
        {socialLinks.map((socialLink) => {
          const Icon = socialLink.icon;
          return (
            <li key={socialLink.id}>
              <a
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLink.label}
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
