import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

import { experiences } from '../../constants/experiences';
import TimelineItem from './TimelineItem';

import styles from './parcours.module.css';

function Timeline() {
  const timelineRef = useRef(null);

  // Progression du scroll sur toute la timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 20%', 'end 80%'],
  });

  // La ligne grandira de 0% à 100%
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={timelineRef} className={styles.timeline}>
      {/* Ligne de fond */}
      <div className={styles.lineBackground}>
        {/* Ligne animée */}
        <motion.div
          className={styles.lineProgress}
          style={{ height: lineHeight }}
        />
      </div>

      {/* Les expériences */}
      {experiences.map((experience) => (
        <TimelineItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
}

export default Timeline;
