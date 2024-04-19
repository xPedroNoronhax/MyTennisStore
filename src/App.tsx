import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "@ionic/react/css/core.css";

import PageProdutos from "./containers/produtos/PageProdutos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/router/Root";
import Home from "./pages.tsx/Home";
import InfoProduct from "./containers/info_product/InfoProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/:brand", element: <PageProdutos /> },
      {
        path: "/product/:productId",
        element: (
          <InfoProduct
            id={0}
            marca={""}
            modelo={""}
            preco={0}
            descricao={""}
            img={""}
            peso={""}
            padrao_cordas={""}
            tamanho_cabeca={""}
          />
        ),
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
      
   
  );
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
