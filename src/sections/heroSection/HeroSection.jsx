import React, { useEffect, useState } from 'react';
import styles from './heroSection.module.css';
import Section from '../../components/ui/section/Section';

const roles = [
  'Développeur Web',
  'Ingénieur Logiciel',
  'Ingénieur Système Embarqué',
];

function HeroSection() {
  const [activeRole, setActiveRole] = useState(0);

  //----------------------------
  // Rotation automatique des mots
  //---------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prevValue) => (prevValue + 1) % roles.length);
    }, 2000); // change tous les 2s

    return () => clearInterval(interval);
  }, []);

  return (
    <Section className={styles.heroSection}>
      <div className={styles.content}>
        <p className={styles.greeting}>Bonjour 👋</p>

        <h1 className={styles.title}>Je suis Ticyano</h1>

        <div className={styles.roles}>
          {roles.map((role, index) => (
            <span
              key={role}
              className={`${styles.role} ${
                activeRole === index ? styles.active : styles.inactive
              }`}
            >
              {activeRole === index ? `[${role}]` : role}
            </span>
          ))}
        </div>

        <p className={styles.description}>
          Je crée des solutions innovantes avec l’IA, les technologies web et
          l’IoT. Passionné par la création d’applications utiles qui résolvent
          des problèmes réels. Test
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

export default HeroSection;
