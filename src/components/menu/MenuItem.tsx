import { NavLink } from "react-router-dom";

interface MenuItemProps {
  item: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onClick }) => {
  const activeClass =
    "text-lg text-gray-700 font-bold  border-b-2 border-solid border-lime-500";
  const inactiveClass = "text-base text-gray-700 font-bold cursor-pointer";
  const handleClick = () => {
    if (onClick) {
      onClick(); // Chama a função onClick se ela existir
    }
  };

  return (
    <li className="max-w-[46px] md:ml-8 text-xl md:my-0 my-7 ">
      <NavLink
        to={`/${item.toLowerCase()}`}
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        onClick={handleClick} // Adicionando onClick ao NavLink
      >
        {item}
      </NavLink>
    </li>
  );
};

export default MenuItem;
