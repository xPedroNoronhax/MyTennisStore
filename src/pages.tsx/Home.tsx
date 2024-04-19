import Banner from "../containers/banner/Banner";
import ProdutosRandom from "../containers/produtos/ProdutosRandom";


const Home = () => {
  return (
    <>
      <Banner />
      <ProdutosRandom title='Mais vendidos'/>
      <ProdutosRandom title='Têndencias'/>
    </>
  );
};

export default Home;
