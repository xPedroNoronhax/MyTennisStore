
interface MenuItemProps {
    item: string;
}

const MenuItem: React.FC<MenuItemProps> = ({item}) => {
  return (
    <li className="max-w-[46px] md:ml-8 text-xl md:my-0 my-7 ">
        <a className=" text-base text-gray-700 font-bold cursor-pointer">{item}</a>
    </li>
  )
}

export default MenuItem