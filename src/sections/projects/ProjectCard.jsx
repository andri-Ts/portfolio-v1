import styles from './projects.module.css';
import Tag from '../../components/ui/tag/Tag';
import ProjectLinks from './ProjectLinks';

function ProjectCard({ project, reverse = false }) {
  return (
    <article className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
      {/* Image */}
      <div className={styles.imageContainer}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>Capture d'écran</div>
        )}
      </div>

      {/* Informations */}
      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{project.title}</h3>

        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.tags}>
          {project.technologies.map((technology) => (
            <Tag key={technology}>{technology} </Tag>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default ProjectCard;
