import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

interface RandomProductCardProps {
  product: {
    modelo?: string;
    peso?: string;
    tamanho_cabeca?: string;
    padrao_cordas?: string;
    nivel?: string[];
    estilo?: string[];
    img?: string;
    id: number;
    preco?: number;
    marca?: string;
  };
}

const ProductCardRandom: React.FC<RandomProductCardProps> = ({ product }) => {
  return (
    <div className="w-[240px] border-solid border-2 border-slate-800 rounded-2xl flex flex-col md:mb-0 mb-4">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.img}
          alt={product.modelo}
          className="h-48 flex mb-[32px] cursor-pointer"
        />
      </Link>
      <div className="mb-2">
        <h2 className="font-bold cursor-pointer">{product.modelo}</h2>
        <p className="font-semibold">{`R$ ${product.preco?.toFixed(2)}`}</p>
        <div className="flex justify-center">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
              />
            </svg>
          </i>
          {typeof product.preco === "number" && (
            <p>
              Até 10 x de {`${(+product.preco.toFixed(2) / 10).toFixed(2)} `}
            </p>
          )}
        </div>
      </div>
      <Button className="w-1/2 mx-auto mb-4 bg-black">Comprar</Button>
    </div>
  );
};

export default ProductCardRandom;