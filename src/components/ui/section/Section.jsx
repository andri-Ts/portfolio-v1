import styles from './section.module.css';

function Section({ id, className, children, ...rest }) {
  return (
    <section id={id} className={`${styles.section} ${className || ''}`}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}

export default Section;
