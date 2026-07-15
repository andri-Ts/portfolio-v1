import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

import TimelineItem from './TimelineItem';

import styles from './parcours.module.css';

function Timeline({ items }) {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 20%', 'end 80%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={timelineRef} className={styles.timeline}>
      {/* Ligne de fond */}
      <div className={styles.lineBackground}>
        <motion.div
          className={styles.lineProgress}
          style={{ height: lineHeight }}
        />
      </div>

      {/* Éléments */}
      {items.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Timeline;
