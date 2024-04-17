import "./App.css";
import Banner from "./containers/banner/Banner";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";
import Produtos from "./containers/produtos/Produtos";
import Searcher from "./containers/searcher/Searcher";
import "bootstrap/dist/css/bootstrap.min.css";
import "@ionic/react/css/core.css";
import InfoProduct from "./containers/info_product/InfoProduct";
import PageProdutos from "./containers/produtos/PageProdutos";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Root from "./components/router/Root";
import Home from "./pages.tsx/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {index:true, element: <Home/>},
      {path:'/babolat', element:<PageProdutos marcaSelecionada="BABOLAT"/> },
      {path:'/wilson', element:<PageProdutos marcaSelecionada="WILSON"/> },
      {path:'/head', element:<PageProdutos marcaSelecionada="HEAD"/> },
      {path:'/yonex', element:<PageProdutos marcaSelecionada="YONEX"/> },
   
      
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;

// {/* <div className="max-w-1440 ">
//       <Header />
//       {/* Main Page */}
//       <main>
//         <Searcher />
//         {/* <Banner />
//         <Produtos title="Mais vendidos" />
//         <Produtos title="Tendências" /> */}
//         <PageProdutos marcaSelecionada="WILSON"  />
//         {/* <InfoProduct/> */}
//         <Footer />
//       </main>
//     </div> */}