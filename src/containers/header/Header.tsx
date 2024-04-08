import CartUser from "../../components/cart&user/CartUser"
import Logo from "../../components/logo/Logo"
import MenuItem from "../../components/menu/MenuItem"

const Header = () => {
  return (
   <header className="mx-auto max-w-1440 flex items-center ">
    <menu className="flex w-[640px] mr-[392px]">
        <Logo/>
        <ul className="flex gap-x-8 items-center">
            <MenuItem item="Raquetes"/>
            <MenuItem item="Raquetes"/>
            <MenuItem item="Raquetes"/>
            <MenuItem item="Raquetes"/>
        </ul>
    </menu>
    <CartUser/>
   </header>
  )
}

export default Header