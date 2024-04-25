import { useState, useRef, useEffect } from "react";
import MenuItem from "../menu/MenuItem";
import Logo from "../logo/Logo";
import CartUser from "../cart&user/CartUser";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Função para fechar o menu quando clicar fora dele
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleMenuItemClick = () => {
    setOpen(false); 
  };

  useEffect(() => {
    
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // Limpa o evento quando o componente é desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="shadow-md flex md:justify-around w-full  fixed top-0 left-0 z-50 bg-white">
      <div className="flex items-center md:justify-around md:pl-0 pl-4 bg-white py-4 relative">
        <div className="  font-bold text-2xl cursor-pointer flex items-center  font-[Poppins] 
      text-gray-800">
          <span className="text-3xl text-indigo-600  pt-2">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute left-80 top-8 cursor-pointer md:hidden mt-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="50"
            viewBox="0 0 50 50"
            name={open ? "close" : "menu"}
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </div>

       <div  >
         
            <ul className={`md:flex   md:pb-0 mt-3  md:w-full w-screen justify-center  lg:mr-[400px]  bg-white    md:border-none border-b-2 border-lime-500 pb-12 absolute md:static  md:z-auto z-10 left-0  md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`} ref={menuRef}>
              <MenuItem item="Babolat" onClick={handleMenuItemClick} />
              <MenuItem item="Head" onClick={handleMenuItemClick} />
              <MenuItem item="Yonex" onClick={handleMenuItemClick} />
              <MenuItem item="Wilson" onClick={handleMenuItemClick} />
            </ul>
       </div>
    
        
          <div className="ml-[60px] md:ml-10">
            <CartUser />
          </div>
        
      </div>
    </div>
  );
};

export default Nav;
/* className={`md:flex md:items-center md:pb-0 mt-3 md:ml-1 lg:mr-[350px] sm:mr-[100px] pb-12 absolute md:static bg-white md:z-auto z-10 left-0 w-full md:w-1/3 md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}*/
