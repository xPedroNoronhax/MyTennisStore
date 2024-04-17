import {Outlet} from 'react-router-dom'
import MainNavigation from './MainNavigation'
import Footer from '../../containers/footer/Footer'

const Root = () => {
  return (
    <div className="max-w-1440 ">
        <MainNavigation/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Root