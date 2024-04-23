import Banner from "../containers/banner/Banner";
import ProdutosRandom from "../containers/produtos/ProdutosRandom";
import { CartState } from "../context/Context";

const Home = () => {
  const { state } = CartState();
  console.log(state);
  return (
    <>
      <Banner />
      <ProdutosRandom title="Mais vendidos" />
      <ProdutosRandom title="Têndencias" />
    </>
  );
};

export default Home;
