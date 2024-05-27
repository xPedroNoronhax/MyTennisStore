import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ProductDetails from "../product_details/ProductDetails";
import { useParams } from "react-router-dom";
import produtos from "../../produtos";
import ProdutosRandom from "../produtos/ProdutosRandom";
import { CartState } from "../../context/Context";

const InfoProduct = () => {
  const { productId } = useParams();

  const {
    state: { cart },
    dispatch,
  } = CartState() ?? {};

  const [alertMessage, setAlertMessage] = useState("");

  const produto = produtos.find((item) =>
    item.modelos.some((modelo) => modelo.id === parseInt(productId ?? ""))
  );

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  const modeloEncontrado = produto.modelos.find(
    (modelo) => modelo.id === parseInt(productId ?? "")
  );

  if (!modeloEncontrado) {
    return <div>Modelo não encontrado</div>;
  }

  const { marca, modelo, preco, img, peso, padrao_cordas, tamanho_cabeca } =
    modeloEncontrado;

  const product = {
    modelo: modelo,
    img: img,
    preco: preco,
    id: parseInt(productId ?? ""),
  };

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

  // eslint-disable-next-line react-hooks/rules-of-hooks
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

  function formatarPreco(preco) {
    return "R$ " + preco.toFixed(2).replace(".", ",");
  }

  return (
    <div className="mt-[80px] flex flex-col ">
      <div className="md:flex md:flex-row flex-col ">
        <img
          className="rounded-[20px] border-1 border-black md:max-w-[488px] "
          src={img}
          alt={modelo}
        />
        <div className="md:ml-[100px] flex flex-col gap-y-[40px]  ">
          <h3 className="font-bold text-2xl md:text-left md:mt-0 mt-4">
            {modelo}
          </h3>
          <h4 className="font-semibold text-2xl md:text-left">
            {formatarPreco(preco)}
          </h4>
          <p className="font-normal text-base md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            enim odio suscipit saepe doloremque sunt quae veritatis quam! Illum
            totam excepturi numquam repellendus perferendis delectus dolorum
            aperiam repellat rerum voluptatibus.
          </p>

          {alertMessage ? (
            <Button
              className="w-[240px] mt-[64px] md:mx-0 mx-auto "
              variant="danger"
            >
              Produto já adicionado
            </Button>
          ) : (
            <Button
              onClick={addToCart}
              className="bg-black w-[240px] mt-[64px] md:mx-0 mx-auto"
            >
              + Carrinho
            </Button>
          )}
        </div>
      </div>
      <ProductDetails
        marca={marca}
        modelo={modelo}
        peso={peso}
        tamanho_cabeca={tamanho_cabeca}
        padrao_cordas={padrao_cordas}
        descricao={""}
      />
      <div className="mt-[80px] md:inline hidden">
        <ProdutosRandom title="Produtos similares" />
      </div>
    </div>
  );
};

export default InfoProduct;
