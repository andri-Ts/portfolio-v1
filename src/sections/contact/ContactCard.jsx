import styles from './contact.module.css';

function ContactCard({ contact }) {
  const Icon = contact.icon;

  const CardContent = (
    <>
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{contact.title}</h3>

        <p className={styles.cardValue}>{contact.value}</p>
      </div>
    </>
  );

  if (contact.href) {
    return (
      <a
        href={contact.href}
        target={contact.href.startsWith('http') ? '_blank' : undefined}
        rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
        className={styles.card}
      >
        {CardContent}
      </a>
    );
  }

  return <div className={styles.card}>{CardContent}</div>;
}

export default ContactCard;
