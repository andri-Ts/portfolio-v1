import React from 'react';
import styles from './about.module.css';

function AboutCard({ highlight }) {
  const Icon = highlight.icon;

  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>

      <h3 className={styles.cardTitle}>{highlight.title}</h3>

      <p className={styles.cardDescription}>{highlight.description}</p>
    </article>
  );
}

export default AboutCard;
