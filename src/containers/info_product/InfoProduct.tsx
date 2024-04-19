import Button from "react-bootstrap/Button";
import ProductDetails from "../product_details/ProductDetails";

import { useParams } from "react-router-dom";
import produtos from "../../produtos";
import ProdutosRandom from "../produtos/ProdutosRandom";

interface InfoProductProps {
  id: number;
  marca: string;
  modelo: string;
  preco: number;
  descricao: string;
  img: string;
  peso: string;
  padrao_cordas: string;
  tamanho_cabeca: string;
}

const InfoProduct: React.FC<InfoProductProps> = () => {
  const { productId } = useParams();

  if (productId === undefined) {
    console.log("produto nao existe");
  }

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
            R${preco.toFixed(2)}
          </h4>
          <p className="font-normal text-base md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            enim odio suscipit saepe doloremque sunt quae veritatis quam! Illum
            totam excepturi numquam repellendus perferendis delectus dolorum
            aperiam repellat rerum voluptatibus.
          </p>
          <div className="flex gap-x-[16px] items-center md:mx-0 mx-auto">
            <button className="w-[40px] rounded-full bg-slate-300 border-1 border-black">
              <p className="text-lg font-black p-1">-</p>
            </button>
            <span>1</span>
            <button className="w-[40px] rounded-full bg-slate-300 border-1 border-black">
              <p className="text-lg font-black p-1">+</p>
            </button>
          </div>
          <Button className="bg-black w-[240px] mt-[64px] md:mx-0 mx-auto">
            Comprar
          </Button>
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
