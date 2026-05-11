import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.container}>
      <h1>Sobre Nossa Loja</h1>
      <p className={styles.descricao}>
        Somos uma loja dedicada à venda de roupas e acessórios premium, trazendo estilo, qualidade e conforto para nossos clientes. Nosso compromisso é oferecer peças modernas e acessíveis para todos os gostos e ocasiões, sempre acompanhando as tendências do mercado.
      </p>
      
      <div className={styles.mvvGrid}>
        <div className={styles.item}>
          <div className={styles.itemIcon}>🚀</div>
          <h3>Missão</h3>
          <p>Oferecer roupas e acessórios de qualidade superior, com estilo, conforto e preços justos, proporcionando aos clientes uma experiência de compra agradável e moderna.</p>
        </div>
        <div className={styles.item}>
          <div className={styles.itemIcon}>👁️</div>
          <h3>Visão</h3>
          <p>Ser reconhecida como uma loja de referência em moda, destacando-se pela qualidade dos produtos, atendimento excepcional e compromisso com as tendências do mercado.</p>
        </div>
        <div className={styles.item}>
          <div className={styles.itemIcon}>💎</div>
          <h3>Valores</h3>
          <p>Compromisso com a satisfação do cliente, qualidade em produtos e atendimento, respeito, transparência, inovação, ética e valorização das pessoas.</p>
        </div>
      </div>
    </section>
  );
}
export default Sobre;