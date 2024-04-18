import ProductCard from "../../components/productsCard/ProductCard";
import PRODUTOS from "../../produtos";

interface ProdutosMarcaProps {
  marcaSelecionada?: string;
}

const ProdutosMarca: React.FC<ProdutosMarcaProps> = ({ marcaSelecionada }) => {
  const produtosDaMarca = PRODUTOS.find(
    (marca) => marca.marca === marcaSelecionada
  );
  return (
    <>
      <section className="flex flex-col">
        <div className="md:flex md:gap-x-8 md:justify-center mx-auto flex-wrap">
          {produtosDaMarca &&
            produtosDaMarca.modelos.map((produto) => (
              <ProductCard
                key={produto.id}
                productName={produto.modelo}
                productImage={produto.img}
                productPrice={produto.preco}
                productId={produto.id}
                
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default ProdutosMarca;
