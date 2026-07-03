import React from 'react';
import styles from './hero.module.css';
import Section from '../../components/ui/section/Section';

function Hero() {
  return (
    <Section id="hero" className={styles.hero}>
      <h1>Hero</h1>
    </Section>
  );
}

export default Hero;
