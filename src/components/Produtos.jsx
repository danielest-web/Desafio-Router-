import React from "react";
import style from "./Produtos.module.css";
import { Link } from "react-router-dom";
import Head from "./Head";
const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((res) => res.json())
      .then((json) => setProdutos(json));
  }, []);

  <Head title="Ranek" descricao="Descricao do site Ranek" />;
  if (produtos === null) return null;

  return (
    <section className={`${style.produtos} + animeLeft`}>
      <Head title="Ranek" description="Descrição do site Ranek" />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={style.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
