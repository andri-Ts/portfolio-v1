import { experiences } from '../../constants/experiences';
import TimelineItem from './TimelineItem';
import styles from './experience.module.css';

function Timeline() {
  return (
    <div className={styles.timeline}>
      {experiences.map((experience) => (
        <TimelineItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
}

export default Timeline;
