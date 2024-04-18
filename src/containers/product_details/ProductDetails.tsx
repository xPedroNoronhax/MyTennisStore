import { useState } from "react";
import Details from "./Details";
import MoreInfo from "./MoreInfo";

interface ProductDetailsProps {
  modelo: string;
  descricao: string;
  peso: string;
  tamanho_cabeca: string;
  padrao_cordas: string;
  marca: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  modelo,
  descricao,
  peso,
  tamanho_cabeca,
  padrao_cordas,
  marca,
}) => {
  const [info, setInfo] = useState(false);

  const handleInfo = () => {
    setInfo(!info);
  };

  const active = "border-b-2 border-black";

  return (
    <div>
      <ul className="flex gap-x-[56px] mt-[96px]">
        <li className={`font-semibold text-base ${!info ? active : ""}`}>
          <button onClick={handleInfo}>Detalhes</button>
        </li>
        <li className={`font-semibold text-base ${info ? active : ""}`}>
          <button onClick={handleInfo}>Mais informações</button>
        </li>
      </ul>
      {!info ? (
        <Details
          modelo={modelo}
          descricao={descricao}
          peso={peso}
          tamanho_cabeca={tamanho_cabeca}
          padrao_cordas={padrao_cordas}
        />
      ) : (
        <MoreInfo
          marca={marca}
          modelo={modelo}
          descricao={descricao}
          peso={peso}
          tamanho_cabeca={tamanho_cabeca}
          padrao_cordas={padrao_cordas}
        />
      )}
    </div>
  );
};

export default ProductDetails;
