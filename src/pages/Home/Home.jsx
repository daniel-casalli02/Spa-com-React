import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import styles from './Home.module.css';

function Home() {
  const destaques = [
    { id: 1, t: "Qualidade", d: "Melhores serviços do mercado."},
    { id: 2, t: "Sobre", d: "O que trazemos ao publico."  },
    { id: 3, t: "Suporte", d: "Atendimento 24 horas por dia." }
  ];

  return (
    <section className={styles.homeContainer}>
      <h1>Bem-vindo à Riachualo</h1>
      <p>Transformando o futuro através das Vestimentas.</p>
      <div className={styles.grid}>
        {destaques.map(item => (
          <Link key={item.id} to={item.link}>
            <Card titulo={item.t} descricao={item.d} />
          </Link>
        ))}
      </div>
    </section>
  );
}
export default Home;
