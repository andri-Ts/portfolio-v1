import styles from './parcours.module.css';
import Section from '../../components/ui/section/Section';
import Timeline from './Timeline';

function Parcours() {
  return (
    <Section id="experience">
      <span className={styles.badge}>EXPÉRIENCE</span>

      <h2 className={styles.title}>
        Mon <span>parcours</span>
      </h2>

      <p className={styles.description}>
        Les expériences qui ont façonné mon parcours de développeur, du
        développement embarqué aux applications web modernes.
      </p>

      <Timeline />
    </Section>
  );
}

export default Parcours;
