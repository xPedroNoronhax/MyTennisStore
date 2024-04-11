
import CartUser from "../../components/cart&user/CartUser";
import Logo from "../../components/logo/Logo";
import MenuItem from "../../components/menu/MenuItem";



const Header = () => {
  return (
    <header className="mx-auto max-w-1440 lg:flex lg:items-center lg:justify-between px-4 lg:px-0">
      <div className="flex justify-between items-center">
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <div className="lg:hidden">
          <CartUser />
        </div>
      </div>
      <nav className=" lg:flex lg:flex-grow lg:items-center lg:w-auto">
        
   
        <ul className="hidden lg:flex lg:flex-wrap gap-x-8 items-center">
          <MenuItem item="Babolat" />
          <MenuItem item="Head" />
          <MenuItem item="Yonex" />
          <MenuItem item="Wilson" />
        </ul>
      </nav>
      
     

      <div className="hidden lg:block">
        <CartUser />
      </div>
    </header>
  );
};

export default Header;
