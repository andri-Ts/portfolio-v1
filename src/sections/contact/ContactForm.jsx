import { useState } from 'react';

import styles from './contact.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    // On branchera EmailJS ici
    console.log(formData);

    setTimeout(() => {
      setIsLoading(false);

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Nom</label>

        <input
          id="name"
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="votre@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>

        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Votre message..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        className={styles.submitButton}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Envoi...' : 'Envoyer le message'}
      </button>
    </form>
  );
}

export default ContactForm;
