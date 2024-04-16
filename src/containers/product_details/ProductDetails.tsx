import { useState } from "react";
import Details from "./Details";
import MoreInfo from "./MoreInfo";

const ProductDetails = () => {
  const [info, setInfo] = useState(false);

  const handleInfo = () => {
    setInfo(!info)
  };

  const active = 'border-b-2 border-black'

  return (
    <div>
      <ul className="flex gap-x-[56px] mt-[96px]">
        <li className={`font-semibold text-base ${!info ? active : ''}`}>
          <button onClick={handleInfo} >Detalhes</button>
        </li>
        <li className={`font-semibold text-base ${info ? active : ''}`}>
          <button onClick={handleInfo}>Mais informações</button>
        </li>
      </ul>
      {!info ? <Details /> : <MoreInfo />}
    </div>
  );
};

export default ProductDetails;
