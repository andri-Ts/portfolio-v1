import Tag from '../../components/ui/tag/Tag';
import styles from './skills.module.css';

function SkillCategory({ category }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>{category.title}</h3>

      <div className={styles.tags}>
        {category.technologies.map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>
    </article>
  );
}

export default SkillCategory;
