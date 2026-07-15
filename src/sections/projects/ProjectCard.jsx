import styles from './projects.module.css';
import Tag from '../../components/ui/tag/Tag';
import ProjectLinks from './ProjectLinks';
import { motion } from 'motion/react';

function ProjectCard({ project, reverse = false }) {
  return (
    <motion.article
      className={`${styles.card} ${reverse ? styles.reverse : ''}`}
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
      }}
    >
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
      <motion.div
        className={styles.content}
        initial={{
          opacity: 0,
          x: reverse ? -40 : 40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
      >
        <h3 className={styles.projectTitle}>{project.title}</h3>

        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.tags}>
          {project.technologies.map((technology) => (
            <Tag key={technology}>{technology} </Tag>
          ))}
        </div>

        <ProjectLinks project={project} />
      </motion.div>
    </motion.article>
  );
}

export default ProjectCard;
