import { experiences } from '../../constants/experiences';
import TimelineItem from './TimelineItem';

function Timeline() {
  return (
    <>
      {experiences.map((experience) => (
        <TimelineItem key={experience.id} experience={experience} />
      ))}
    </>
  );
}

export default Timeline;
