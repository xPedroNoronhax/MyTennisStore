import React from "react";
import blade from "../../assets/blade.png";
import Button from "react-bootstrap/Button";

interface ProductCardProps {
  productName: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ productName }) => {
  return (
    <div className="w-[240px] border-solid border-2 border-slate-800 rounded-2xl flex flex-col md:mb-0 mb-4 ">
      <img src={blade} className="h-48 flex mb-[32px] cursor-pointer " />
      <div className="mb-2">
        <h2 className="font-bold cursor-pointer">{productName}</h2>
        <p className="font-semibold">R$1000,00</p>
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
          <p>Até 10x de R$100,00</p>
        </div>
      </div>
      <Button className=" w-1/2 mx-auto mb-4 bg-black">Comprar</Button>
    </div>
  );
};

export default ProductCard;
