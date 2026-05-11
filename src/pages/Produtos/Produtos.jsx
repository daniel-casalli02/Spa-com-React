import styles from './Produtos.module.css';

function Produtos() {
  const listaProdutos = [
    { id: 1, nome: "Jaqueta Bomber 'Aurora Boreal'", desc: "Feita em tecido tecnológico com acabamento furta-cor, esta jaqueta apresenta tons que variam entre o azul profundo e o violeta. Possui forro térmico leve, ideal para meia-estação." },
    { id: 2, nome: "Calça Jogger", desc: "Confeccionada em um mix de linho com elastano, esta calça oferece o visual elegante das fibras naturais com a liberdade de movimento necessária para o dia a dia." },
    { id: 3, nome: "Suéter de Gola Alta", desc: "Tricotado em cashmere ultra-fino, este suéter possui uma trama respirável que mantém a temperatura corporal sem adicionar volume excessivo sob casacos." },
    { id: 4, nome: "Vestido Midi", desc: "Um vestido midi em seda lavada com caimento fluido. A estampa é orgânica, lembrando as ondas do mar em tons de areia e off-white." }
  ];

  return (
    <section>
      <h1>Nossos Produtos</h1>
      <div className={styles.lista}>
        {listaProdutos.map(s => (
          <div key={s.id} className={styles.produtosCard}>
            <h3>{s.nome}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Produtos;