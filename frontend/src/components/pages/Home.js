import React from 'react';
import styles from './Home.module.css';
import ImageSlider from './layout/ImageSlider'; // Use the correct component name
import LinkButton from './layout/LinkButton'; // Adjust the path as necessary

function Home() {
  return (
    <section className={styles.home_container}>
      <h1><span>Vagas de emprego</span></h1>
      <p>Confira os benefícios e nos envie seu currículo.</p>
      <LinkButton to="/newproject" text="Enviar currículo" />
      {/* Add your Slider component here */}
      <ImageSlider />
    </section>
  );
}

export default Home;
