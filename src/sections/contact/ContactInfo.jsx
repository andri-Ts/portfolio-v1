import ContactCard from './ContactCard';
import { contacts } from '../../constants/contact';

import styles from './contact.module.css';
import { FiMapPin } from 'react-icons/fi';

function ContactInfo() {
  return (
    <div className={styles.info}>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}

      <p className={styles.location}>
        <FiMapPin />
        <span>Île-de-France, France</span>
      </p>
    </div>
  );
}

export default ContactInfo;
