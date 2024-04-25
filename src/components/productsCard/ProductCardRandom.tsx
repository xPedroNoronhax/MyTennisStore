import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";

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

const ProductCardRandom: React.FC<RandomProductCardProps> = React.memo(
  ({ product }) => {
    const {
      state: { cart },
      dispatch,
    } = CartState();

    const [alertMessage, setAlertMessage] = useState("");

    const addToCart = () => {
      const alreadyInCart = cart.some((item) => item.id === product.id);

      if (alreadyInCart) {
        setAlertMessage("Este produto já está no carrinho!");
      } else {
        dispatch({
          type: "ADD_TO_CART",
          payload: product,
        });
      }
    };

    useEffect(() => {
      let timeOutId: NodeJS.TimeOut;

      if (alertMessage) {
        timeOutId = setTimeout(() => {
          setAlertMessage("");
        }, 2000);
      }
      return () => {
        clearTimeout(timeOutId);
      };
    }, [alertMessage]);

    function formatarPreco(preco) {
      return "R$ " + preco.toFixed(2).replace(".", ",");
    }
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
          <p className="font-semibold">{`${formatarPreco(
            product.preco
          )}`}</p>
          <div className="flex justify-center">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
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
                Até 10 x de {`${formatarPreco(product.preco/10)} `}
              </p>
            )}
          </div>
        </div>
        {alertMessage ? (
          <Button className=" w-1/2 mx-auto mb-4 " variant="danger">
            Produto ja adicionado
          </Button>
        ) : (
          <Button onClick={addToCart} className=" w-1/2 mx-auto mb-4 bg-black">
            + Carrinho
          </Button>
        )}
      </div>
    );
  }
);

export default ProductCardRandom;
