import Section from '../../components/ui/section/Section';

import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

import styles from './contact.module.css';

function Contact() {
  return (
    <Section id="contact" className={styles.contact}>
      <span className={styles.badge}>CONTACT</span>

      <h2 className={styles.title}>
        Discutons de <span>votre projet</span>
      </h2>

      <p className={styles.description}>
        Je suis actuellement à la recherche d'opportunités en développement
        logiciel, web et systèmes embarqués. N'hésitez pas à me contacter pour
        échanger sur votre projet ou une collaboration.
      </p>

      <div className={styles.container}>
        <ContactInfo />

        <ContactForm />
      </div>
    </Section>
  );
}

export default Contact;
