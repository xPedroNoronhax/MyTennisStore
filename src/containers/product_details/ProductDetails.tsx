import Details from "./Details"
import MoreInfo from "./MoreInfo"

const ProductDetails = () => {
  return (
    <div>
        <ul className="flex gap-x-[56px] mt-[96px]">
            <li className="font-semibold text-base"><button>Detalhes</button></li>
            <li className="font-semibold text-base"><button>Mais informações</button></li>
        </ul>
        <Details/>
        {/* <MoreInfo/> */}
    </div>
  )
}

export default ProductDetails