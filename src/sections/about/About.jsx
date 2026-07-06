import React from 'react';
import styles from './about.module.css';
import Section from '../../components/ui/section/Section';
import AboutLeft from './AboutLeft';
import AboutRight from './AboutRight';

function About() {
  console.log('ABOUT RENDER');
  return (
    <Section id="about" className={styles.about}>
      <div className={styles.container}>
        <AboutLeft />
        <AboutRight />
      </div>
    </Section>
  );
}

export default About;
