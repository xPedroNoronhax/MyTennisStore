import ProductCard from "../../components/productsCard/ProductCard";


interface ProdutosProp{
    title: string;
}

const Produtos: React.FC<ProdutosProp> = ({title}) => {
  return (
    <section className="flex flex-col">
        <h2 className="text-4xl font-bold text-left mb-[52px] mt-[42px]">{title}</h2>
        <div className="flex gap-x-8 justify-center ">
            <ProductCard productName='Wilson Blade 16x19' />
            <ProductCard productName='Wilson Blade 16x19' />
            <ProductCard productName='Wilson Blade 16x19' />
            <ProductCard productName='Wilson Blade 16x19' />
        </div>
    </section>
  )
}

export default Produtos