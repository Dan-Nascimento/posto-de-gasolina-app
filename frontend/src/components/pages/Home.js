import React from 'react';
import styles from './Home.module.css';
import savings from '../../img/posto.jpg';
import LinkButton from './layout/LinkButton'; // Adjust the path as necessary

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Vagas de <span>emprego</span></h1>
      <p>Confira os benefícios e nos envie seu currículo.</p>
      <LinkButton to="/newproject" text="Enviar currículo" />
      <img src={savings} alt="Posto" />
    </section>
  );
}

export default Home;
