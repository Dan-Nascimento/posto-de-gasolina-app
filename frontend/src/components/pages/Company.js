import React from 'react';
import styles from './Company.module.css'; // Import your CSS module

function Company() {
  return (
    <section className={styles.company_container}>
      <h1 className={styles.company_title}>Quem somos</h1>
      <p className={styles.company_text}>
        Somos uma empresa comprometida com a excelência e inovação no setor mecânica em postos de combustíveis. Oferecemos todos os tipos de serviços necessários para realizar a manutenção do seu automovel com baixos preços e boa qualidade.
      </p>
    </section>
  );
}

export default Company;
