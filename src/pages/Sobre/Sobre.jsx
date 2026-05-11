import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.container}>
      <h1>Sobre Nosssa loja</h1>
      <p className={styles.descricao}>
        Somos uma loja dedicada à venda de roupas e acessórios, trazendo estilo, qualidade e conforto para seus clientes. Nosso compromisso é oferecer peças modernas e acessíveis para todos os gostos e ocasiões, sempre acompanhando as tendências da moda.
      </p>
      
      <div className={styles.mvvGrid}>
        <div className={styles.item}>
          <h3>🚀 Missão</h3>
          <p>Oferecer roupas e acessórios de qualidade, com estilo, conforto e preços acessíveis, proporcionando aos clientes uma experiência de compra agradável e moderna.</p>
        </div>
        <div className={styles.item}>
          <h3>👁️ Visão</h3>
          <p>Ser reconhecida como uma loja de referência em moda, destacando-se pela qualidade dos produtos, atendimento ao cliente e compromisso com as tendências do mercado.</p>
        </div>
        <div className={styles.item}>
          <h3>💎 Valores</h3>
          <p>Compromisso com a satisfação do cliente, Qualidade em produtos e atendimento, Respeito e transparência, Inovação e modernidade, Ética e responsabilidade, Valorização das pessoas e da diversidade</p>
        </div>
      </div>
    </section>
  );
}
export default Sobre;