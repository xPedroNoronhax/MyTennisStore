
import ProdutosMarca from "./ProdutosMarca";

interface PageProdutosProps {
  marcaSelecionada?: string ;
  marca?: string;
}

const PageProdutos: React.FC<PageProdutosProps> = ({ marcaSelecionada }) => {
  const marca = marcaSelecionada
    ? marcaSelecionada.charAt(0).toUpperCase() +
      marcaSelecionada.slice(1).toLowerCase()
    : "";

  return (
    <div>
      <h2 className="text-4xl font-bold text-left mb-[52px] mt-[42px]">{`Raquetes ${marca}`}</h2>
      <section>
        <ProdutosMarca marcaSelecionada={marcaSelecionada} />
      </section>
    </div>
  );
};

export default PageProdutos;
