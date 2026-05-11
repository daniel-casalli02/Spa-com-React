import Card from '../../components/Card/Card';
import styles from './Home.module.css';

function Home() {
  const destaques = [
    { id: 1, t: "Qualidade Premium", d: "Melhores serviços e produtos do mercado com garantia total.", icon: "✨" },
    { id: 2, t: "Nossa Missão", d: "Transformar a forma como você se veste com estilo e conforto.", icon: "🎯" },
    { id: 3, t: "Suporte 24h", d: "Atendimento dedicado para resolver suas dúvidas e questões.", icon: "💬" }
  ];

  return (
    <section className={styles.homeContainer}>
      <h1>Bem-vindo à Riachualo</h1>
      <p>Transformando o futuro através de vestimentas exclusivas e de qualidade</p>
      <div className={styles.grid}>
        {destaques.map(item => (
          <Card key={item.id} titulo={item.t} descricao={item.d} icon={item.icon} />
        ))}
      </div>
    </section>
  );
}
export default Home;
