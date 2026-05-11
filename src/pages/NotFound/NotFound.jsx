// Imports aqui
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className={styles.errorWrapper}>
      <h1>404 ❌</h1>
      <p>Opa! Essa página não existe.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}
export default NotFound;
