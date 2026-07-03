import React from 'react';
import styles from './about.module.css';
import Section from '../../components/ui/section/Section';

function About() {
  return (
    <Section id="about" className={styles.about}>
      <h1>About</h1>
    </Section>
  );
}

export default About;
