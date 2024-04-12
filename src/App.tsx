import "./App.css";
import Banner from "./containers/banner/Banner";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";
import Produtos from "./containers/produtos/Produtos";
import Searcher from "./containers/searcher/Searcher";
import "bootstrap/dist/css/bootstrap.min.css";
import '@ionic/react/css/core.css';

function App() {
  return (
    <div className="max-w-1440 ">
      <Header />
      <Searcher />
      <main>
      
        <Banner />
        
        <Produtos title="Mais vendidos"/>
        <Produtos title="Tendências"/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
