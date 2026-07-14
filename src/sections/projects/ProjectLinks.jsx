import styles from './projects.module.css';

function ProjectLinks({ project }) {
  return (
    <div className={styles.links}>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
      )}

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className={styles.linkPrimary}
        >
          Démo
        </a>
      )}
    </div>
  );
}

export default ProjectLinks;
