import Tag from '../../components/ui/tag/Tag';
import styles from './skills.module.css';

function SkillCategory({ category }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>{category.title}</h3>

      <ul className={styles.list}>
        {category.technologies.map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </ul>
    </article>
  );
}

export default SkillCategory;
