import React from 'react';
import styles from './about.module.css';

function AboutCard({ highlight }) {
  const Icon = highlight.icon;

  return (
    <article className={styles.card}>
      <div className={styles.icon}>
        <Icon />
      </div>

      <h3>{highlight.title}</h3>

      <p>{highlight.description}</p>
    </article>
  );
}

export default AboutCard;
