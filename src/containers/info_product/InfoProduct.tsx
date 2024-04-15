import blade from "../../assets/blade.png";
import Button from "react-bootstrap/Button";
import ProductDetails from "../product_details/ProductDetails";
import Produtos from "../produtos/Produtos";
const InfoProduct = () => {
  return (
    <div className="mt-[80px] flex flex-col ">
      <div className="md:flex md:flex-row flex-col ">
        <img
          className="rounded-[20px] border-1 border-black"
          src={blade}
          alt=""
        />
        <div className="md:ml-[100px] flex flex-col gap-y-[40px]  ">
          <h3 className="font-bold text-2xl md:text-left md:mt-0 mt-4">Wilson Blade 16x19</h3>
          <h4 className="font-semibold text-2xl md:text-left">R$1000,00</h4>
          <p className="font-normal text-base md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            enim odio suscipit saepe doloremque sunt quae veritatis quam! Illum
            totam excepturi numquam repellendus perferendis delectus dolorum
            aperiam repellat rerum voluptatibus.
          </p>
          <div className="flex gap-x-[16px] items-center md:mx-0 mx-auto">
            <button className="w-[40px] rounded-full bg-slate-300 border-1 border-black">
              <p  className="text-lg font-black p-1">-</p>
            </button>
            <span>1</span>
            <button className="w-[40px] rounded-full bg-slate-300 border-1 border-black">
              <p className="text-lg font-black p-1">+</p>
            </button>
          </div>
          <Button className="bg-black w-[240px] mt-[64px] md:mx-0 mx-auto" >Comprar</Button>
        </div>
      </div>
      <ProductDetails/>
      <div className="mt-[80px] md:inline hidden">
        <Produtos title="Produtos similares"/>
      </div>
    </div>
  );
};

export default InfoProduct;
