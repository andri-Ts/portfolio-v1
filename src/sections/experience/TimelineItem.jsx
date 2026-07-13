import styles from './experience.module.css';
import Tag from '../../components/ui/tag/Tag';
import { motion } from 'motion/react';

function TimelineItem({ experience }) {
  return (
    <motion.article
      className={styles.timelineItem}
      initial={{
        opacity: 0,
        y: 40,
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
        duration: 0.5,
      }}
    >
      {/* Point sur la timeline */}
      <div className={styles.marker}>
        <div className={styles.dot}></div>
      </div>

      {/* Contenu */}
      <div className={styles.content}>
        <p className={styles.period}>{experience.period}</p>

        <h3 className={styles.jobTitle}>{experience.title}</h3>

        <p className={styles.company}>
          {experience.company} • {experience.location}
        </p>

        <p className={styles.descriptionText}>{experience.description}</p>

        <div className={styles.tags}>
          {experience.technologies.map((technology) => (
            <Tag key={technology} text={technology} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default TimelineItem;
