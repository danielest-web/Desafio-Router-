import React from "react";
import style from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";
const Contato = () => {
  return (
    <section className={` ${style.contato} +  animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={style.dados}>
          <li>sdanielsouza23@gmail.com</li>
          <li>619999-99999</li>
          <li>Rua Ali perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
