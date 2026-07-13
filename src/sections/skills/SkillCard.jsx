import styles from './skills.module.css';

function SkillCard({ technology }) {
  const Icon = technology.icon;

  return (
    <article className={styles.skillCard}>
      <Icon className={styles.skillIcon} />

      <h4 className={styles.skillName}>{technology.name}</h4>
    </article>
  );
}

export default SkillCard;
