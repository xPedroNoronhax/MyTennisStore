
import Banner from '../containers/banner/Banner'
import Produtos from '../containers/produtos/Produtos'

const Home = () => {
  return (
    <>
    <Banner/>
    <Produtos title='Mais vendidos'/>
    <Produtos title='Têndencias'/>
    </>
  )
}

export default Home