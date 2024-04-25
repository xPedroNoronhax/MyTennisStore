import Carousel from "react-bootstrap/Carousel";

import { useState } from "react";

import Blade from "../../assets/bannerBlade.jpg";
import Pure from "../../assets/bannerPureAero.jpg";
import Ezone from "../../assets/bannerEzone.jpg";

function Banner() {

  //carrousel de imagem que esta na home.
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mt-[81px] sm:min-h-28 cursor-pointer ">
      <Carousel.Item>
        <img src={Blade} className="w-screen lg:h-[300px] h-28" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Ezone} className="w-screen lg:h-[300px] h-28" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Pure} className="w-screen lg:h-[300px] h-28" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
