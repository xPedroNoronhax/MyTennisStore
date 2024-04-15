import "./App.css";
import Banner from "./containers/banner/Banner";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";
import Produtos from "./containers/produtos/Produtos";
import Searcher from "./containers/searcher/Searcher";
import "bootstrap/dist/css/bootstrap.min.css";
import "@ionic/react/css/core.css";
import InfoProduct from "./containers/info_product/InfoProduct";

function App() {
  return (
    <div className="max-w-1440 ">
      <Header />
    {/* Main Page */}
      <main>
        <Searcher />
        <Banner />
        <Produtos title="Mais vendidos" />
        <Produtos title="Tendências" />
        {/* <InfoProduct/> */}
        <Footer />
      </main> 
      
  
    
    </div>
  );
}

export default App;
