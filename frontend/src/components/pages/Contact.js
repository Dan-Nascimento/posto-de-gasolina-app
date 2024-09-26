import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={styles.contact_container}>
      <h1 className={styles.contact_title}>Contato</h1>
      <p className={styles.contact_text}>
        Entre em contato conosco para mais informações. Estamos disponíveis para
        responder suas dúvidas e fornecer mais detalhes sobre nossas vagas de empregos.
      </p>
      <p className={styles.contact_phone}>
        Telefone: (11) 1234-5678
      </p>
    </section>
  );
}

export default Contact;
