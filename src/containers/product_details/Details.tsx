import React from "react";

const Details = ({ tamanho_cabeca, modelo, peso }) => {
  return (
    <div className="flex flex-col items-start mt-[56px] md:gap-y-2 gap-y-5 ml-4">
      <h2 className="font-bold text-[24px]">Descrição da Raquete {modelo}</h2>
      <p className="text-start font-medium">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum nisi
        doloribus dicta incidunt totam quas aut voluptas accusantium unde ad
        laborum ab, dignissimos dolorum inventore perspiciatis ducimus?
        Voluptatem, omnis fugit?
      </p>
      <h2 className="font-bold text-[24px]">Conheça as Características:</h2>
      <ul className="flex flex-col items-start">
        <li>
          <span className="font-semibold">Composição:</span> Grafite
        </li>
        <li>
          <span className="font-semibold">Cabeça:</span> {tamanho_cabeca}
        </li>
        <li>
          <span className="font-semibold">Peso:</span>
          {peso}
        </li>
        <li>
          <span className="font-semibold">Origem:</span> Importado
        </li>
      </ul>
    </div>
  );
};

export default Details;
