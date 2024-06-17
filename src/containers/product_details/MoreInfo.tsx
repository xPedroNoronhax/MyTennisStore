import React from "react";

const MoreInfo = ({ tamanho_cabeca, marca, peso, padrao_cordas }) => {
  return (
    <ul className="flex flex-col items-start mt-[56px] gap-y-2 ml-4">
      <li className="text-xl ">
        <span className="font-bold mr-6  ">Marca</span> {marca}
      </li>
      <li className="text-xl ">
        <span className="font-bold mr-6   ">Material da raquete</span> Grafite
      </li>
      <li className="text-xl ">
        <span className="font-bold mr-6  ">Cabeça</span> {tamanho_cabeca}
      </li>
      <li className="text-xl ">
        <span className="font-bold mr-6  ">Peso Raquete (gr)</span> {peso}
      </li>
      <li className="text-xl ">
        <span className="font-bold mr-6  ">Padrão de corda</span>
        {padrao_cordas}
      </li>
    </ul>
  );
};

export default MoreInfo;
