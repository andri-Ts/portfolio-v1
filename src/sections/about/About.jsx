import React from 'react';
import styles from './about.module.css';
import Section from '../../components/ui/section/Section';

function About() {
  console.log('ABOUT RENDER');
  return (
    <Section id="about" className={styles.about}>
      <h1>test</h1>
      <h1>About</h1>
    </Section>
  );
}

export default About;
