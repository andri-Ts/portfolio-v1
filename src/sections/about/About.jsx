import React from 'react';
import styles from './about.module.css';
import Section from '../../components/ui/section/Section';

function About() {
  console.log('ABOUT RENDER');
  return (
    <Section id="about" className={styles.about}>
      <h1>About 2</h1>
    </Section>
  );
}

export default About;
