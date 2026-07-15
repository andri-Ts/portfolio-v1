import Tag from '../../components/ui/tag/Tag';
import styles from './parcours.module.css';
import { motion } from 'motion/react';

function TimelineItem({ item }) {
  const isExperience = !!item.company;

  return (
    <motion.article
      className={styles.timelineItem}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
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
        <p className={styles.period}>{item.period}</p>

        {isExperience ? (
          <>
            <h3 className={styles.jobTitle}>{item.title}</h3>

            <p className={styles.company}>
              {item.company} • {item.contract}
            </p>

            <p className={styles.location}>{item.location}</p>

            <p className={styles.descriptionText}>{item.description}</p>

            <div className={styles.tags}>
              {item.technologies.map((technology) => (
                <Tag key={technology} text={technology} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h3 className={styles.jobTitle}>{item.school}</h3>

            <p className={styles.company}>{item.diploma}</p>

            <p className={styles.location}>{item.specialization}</p>

            <p className={styles.descriptionText}>{item.location}</p>
          </>
        )}
      </div>
    </motion.article>
  );
}

export default TimelineItem;
