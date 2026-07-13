import styles from './experience.module.css';
import Tag from '../../components/ui/tag/Tag';

function TimelineItem({ experience }) {
  return (
    <article className={styles.timelineItem}>
      <div className={styles.period}>{experience.period}</div>

      <div className={styles.content}>
        <h3 className={styles.jobTitle}>{experience.title}</h3>

        <p className={styles.company}>{experience.company}</p>

        <p className={styles.location}>{experience.location}</p>

        <p className={styles.description}>{experience.description}</p>

        <div className={styles.tags}>
          {experience.technologies.map((technology) => (
            <Tag key={technology} text={technology} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default TimelineItem;
