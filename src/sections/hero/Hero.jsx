import React from 'react';
import styles from './hero.module.css';
import Section from '../../components/ui/section/Section';

function Hero() {
  return (
    <Section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.greeting}>Bonjour 👋</p>

        <h1 className={styles.title}>Je suis Ticyano</h1>

        <h2 className={styles.subtitle}>
          <span className={styles.highlight}>[Développeur Web]</span> &
          Ingénieur en Systèmes Embarqués
        </h2>

        <p className={styles.description}>
          Je crée des solutions innovantes avec l’IA, les technologies web et
          l’IoT. Passionné par la création d’applications utiles qui résolvent
          des problèmes réels.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryBtn}>
            Voir les projets →
          </a>

          <a href="#contact" className={styles.secondaryBtn}>
            Me contacter
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
