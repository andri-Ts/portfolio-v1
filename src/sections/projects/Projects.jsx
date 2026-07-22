import Section from '../../components/ui/section/Section';
import ProjectsList from './ProjectsList';
import styles from './projects.module.css';

function Projects() {
  return (
    <Section id="projects" className={styles.projects}>
      <span className={styles.badge}>PROJETS</span>

      <h2 className={styles.title}>
        Mes <span>projets</span>
      </h2>

      {/* <p className={styles.description}>
        Une sélection de projets réalisés en développement web, systèmes
        embarqués et programmation bas niveau, illustrant mon approche de la
        conception logicielle et de la résolution de problèmes.
      </p> */}

      <ProjectsList />
    </Section>
  );
}

export default Projects;
