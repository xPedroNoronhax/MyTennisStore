import React from "react";
import { useParams } from "react-router-dom";
import ProdutosMarca from "./ProdutosMarca";

const PageProdutos = () => {
  const { brand } = useParams();
  const marcaSelecionada = brand ? brand.toUpperCase() : "";
  const marca = marcaSelecionada
    ? marcaSelecionada.charAt(0).toUpperCase() +
      marcaSelecionada.slice(1).toLowerCase()
    : "";

  return (
    <div>
      <h2 className="text-4xl font-bold text-left mb-[52px] mt-[42px]">{`Raquetes ${marca}`}</h2>
      <section>
        <ProdutosMarca marcaSelecionada={marcaSelecionada} />
      </section>
    </div>
  );
};

export default PageProdutos;
