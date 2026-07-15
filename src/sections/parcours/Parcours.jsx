import Section from '../../components/ui/section/Section';

import Timeline from './Timeline';

import { formations } from '../../constants/formations';
import { experiences } from '../../constants/experiences';

import styles from './parcours.module.css';

function Parcours() {
  return (
    <Section id="parcours" className={styles.parcours}>
      <span className={styles.badge}>PARCOURS</span>

      <h2 className={styles.title}>
        Mon <span>parcours</span>
      </h2>

      <p className={styles.description}>
        Mon parcours académique et professionnel, de ma formation d'ingénieur
        jusqu'à mes expériences en développement logiciel.
      </p>

      <h3 className={styles.sectionTitle}>Formation</h3>

      <Timeline items={formations} />

      <h3 className={styles.sectionTitle}>Expériences</h3>

      <Timeline items={experiences} />
    </Section>
  );
}

export default Parcours;
