import Button from "react-bootstrap/Button";
import ProductDetails from "../product_details/ProductDetails";
import Produtos from "../produtos/Produtos";
import { useParams } from "react-router-dom";
import produtos from "../../produtos";

interface InfoProductProps{
  marca:string;
  modelo:string;
  
}

const InfoProduct:React.FC<InfoProductProps> = () => {
  const { productId } = useParams(); 


  const produto = produtos.find((item) =>
    item.modelos.some((modelo) => modelo.id === parseInt(productId))
  );


  if (!produto) {
    return <div>Produto não encontrado</div>;
  }


  const {
    marca,
    modelo,
    preco,
    descricao,
    img,
    peso,
    padrao_cordas,
    tamanho_cabeca,
  } = produto.modelos.find((modelo) => modelo.id === parseInt(productId));
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
        descricao={descricao}
        peso={peso}
        tamanho_cabeca={tamanho_cabeca}
        padrao_cordas={padrao_cordas}
      />
      <div className="mt-[80px] md:inline hidden">
        <Produtos title="Produtos similares" />
      </div>
    </div>
  );
};

export default InfoProduct;
