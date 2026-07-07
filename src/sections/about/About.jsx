import React from 'react';
import styles from './about.module.css';
import Section from '../../components/ui/section/Section';
import AboutLeft from './AboutLeft';
import AboutRight from './AboutRight';

function About() {
  console.log('ABOUT RENDER');

  return (
    <Section id="about">
      <span className={styles.badge}>À PROPOS</span>

      <h2 className={styles.title}>
        À <span>propos</span> de moi
      </h2>

      <div className={styles.grid}>
        <AboutLeft />
        <AboutRight />
      </div>
    </Section>
  );
}

export default About;
