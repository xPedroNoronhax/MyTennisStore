import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//componente que tem a função de levar o usuario ao topo da imagem quando trocamos a rota, sem ele, por exemplo, se ele selecionar um produto que esta no meio da pagina, a rota muda, porém a pagina ainda fica no meio.

const ScrollToTop = () => {
    
    const { pathname } = useLocation();
  
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null
  }
  
  export default ScrollToTop;