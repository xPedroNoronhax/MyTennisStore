import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";

const ProductCard = ({ productName, productImage, productPrice, productId }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [alertMessage, setAlertMessage] = useState("");

  const product = {
    modelo: productName,
    img: productImage,
    preco: productPrice,
    id: productId,
  };

  const addToCart = () => {
    const alreadyInCart = cart.some(
      (item) => item.id === product.id
    );

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
    let timeoutId;

    if (alertMessage) {
      timeoutId = setTimeout(() => {
        setAlertMessage("");
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [alertMessage]);

  const formatarPreco = (preco) => {
    return "R$ " + preco.toFixed(2).replace(".", ",");
  };

  return (
    <div className="w-[240px] border-solid border-2 border-slate-800 rounded-2xl flex flex-col md:mb-0 mb-4">
      <Link to={`/product/${productId}`}>
        <img
          src={productImage}
          alt={productName}
          className="h-48 flex mb-[32px] cursor-pointer"
        />
      </Link>
      <div className="mb-2">
        <h2 className="font-bold cursor-pointer">{productName}</h2>
        <p className="font-semibold">{`${formatarPreco(productPrice)}`}</p>
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
          {typeof productPrice === "number" && (
            <p>Até 10 x de {`${formatarPreco(productPrice / 10)}`}</p>
          )}
        </div>
      </div>

      {alertMessage ? (
        <Button className="w-1/2 mx-auto mb-4" variant="danger">
          Produto já adicionado
        </Button>
      ) : (
        <Button onClick={addToCart} className="w-1/2 mx-auto mb-4 bg-black text-white">
          + Carrinho
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
