import { useState } from "react";
import MenuItem from "../menu/MenuItem";
import Logo from "../logo/Logo";
import CartUser from "../cart&user/CartUser";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
        
      <div className="flex items-center md:justify-around bg-white py-4 md:px-10 px-7 relative">
        <div
          className=" w-1/3 font-bold text-2xl cursor-pointer flex items-center  font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <NavLink to='/'>
              <Logo />
            </NavLink>
          </span>
         
        </div>

        <div
          onClick={() => setOpen(!open)}
          className=" text-3xl absolute right-8 top-6 cursor-pointer md:hidden mt-4"
        >
            
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="50"
            viewBox="0 0 50 50"
            name={open ? "close" : "menu"}
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
          {/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 mt-3  md:ml-1 md:mr-[400px] pb-12 absolute md:static bg-white md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <NavLink to="/babolat">
            <MenuItem item="Babolat" />
          </NavLink>
          <NavLink to='/head'>
            <MenuItem item="Head" />
          </NavLink>
          <NavLink to="/yonex">
            <MenuItem item="Yonex" />
          </NavLink>
          <NavLink to='/wilson'>
            <MenuItem item="Wilson" />
          </NavLink>
        </ul>
        <CartUser />
        
      </div>
      
    </div>
    
  );
};

export default Nav;
