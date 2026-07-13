import styles from './skills.module.css';
import SkillCard from './SkillCard';

function SkillCategory({ category }) {
  return (
    <div className={styles.category}>
      <h3 className={styles.categoryTitle}>{category.title}</h3>

      <div className={styles.skillsGrid}>
        {category.technologies.map((technology) => (
          <SkillCard key={technology.id} technology={technology} />
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
