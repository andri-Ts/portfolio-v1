import React from 'react';
import styles from './about.module.css';
import { aboutHighlights } from '../../constants/aboutHighlights';
import AboutCard from './AboutCard';

function AboutRight() {
  return (
    <div className={styles.right}>
      {aboutHighlights.map((highlight) => (
        <AboutCard key={highlight.id} highlight={highlight} />
      ))}
    </div>
  );
}

export default AboutRight;
