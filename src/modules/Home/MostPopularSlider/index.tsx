import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { MostPopularContainer, MostPopularContent } from "./styles";

const MostPopularSlider = () => {
  const handleDragStart = (e: any) => e.preventDefault();

  const items = [
    <img
      src="https://images.ctfassets.net/qu53tdnhexvd/2FW4qEI966rN9qpLXaSTLv/665b36a27c78dc40c95532dfcb44aa3f/ice_cream_sundae.jpg"
      onDragStart={handleDragStart}
    />,
    <img
      src="http://www.joaoalberto.com/wp-content/uploads/2017/09/22/ms.jpg"
      onDragStart={handleDragStart}
    />,
    <img
      src="https://wallpapercave.com/wp/wp8523982.jpg"
      onDragStart={handleDragStart}
    />,
    <img
      src="https://media.gazetadopovo.com.br/2020/02/11154241/texto_01_img_02.jpg"
      onDragStart={handleDragStart}
    />,
  ];

  return (
    <MostPopularContainer>
      <MostPopularContent>
        <AliceCarousel
          mouseTracking
          items={items}
          infinite
          autoPlay
          autoPlayInterval={4000}
          renderNextButton={() => <></>}
          renderPrevButton={() => <></>}
          renderDotsItem={() => <></>}
        />
      </MostPopularContent>
    </MostPopularContainer>
  );
};

export default MostPopularSlider;
