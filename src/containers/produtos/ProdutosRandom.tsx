import React, { memo } from "react";
import ProductCardRandom from "../../components/productsCard/ProductCardRandom";
import produtos from "../../produtos";

interface Modelo {
  modelo: string;
  peso: string;
  tamanho_cabeca: string;
  padrao_cordas: string;
  nivel: string[];
  estilo: string[];
  img: string;
  id: number;
  preco: number;
}

interface Marca {
  marca: string;
  modelos: Modelo[];
  
}

interface ProdutosRandomProps {
  title: string;
}


const ProdutosRandom: React.FC<ProdutosRandomProps> = ({ title }) => {
  function produtoAleatorio(produtos: Marca[]) {
    const marcaAleatoria =
      produtos[Math.floor(Math.random() * produtos.length)];
    const modeloAleatorio =
      marcaAleatoria.modelos[
        Math.floor(Math.random() * marcaAleatoria.modelos.length)
      ];
    return modeloAleatorio;
  }

  const produtosAleatorios = Array.from({ length: 4 }, () =>
    produtoAleatorio(produtos)
  );

  return (
    <>
      <section className="flex flex-col">
        <h2 className="text-4xl font-bold text-left mb-[52px] mt-[42px]">
          {title}
        </h2>
        <div className="md:flex md:gap-x-8 md:justify-center mx-auto flex-wrap ">
          {produtosAleatorios.map((produto, index) => (
            <ProductCardRandom key={index} product={produto} />
          ))}
        </div>
      </section>
    </>
  );
};


export default memo(ProdutosRandom);
