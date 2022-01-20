import Image from "next/image";
import React from "react";

import HeaderTopbar from "shared/components/organisms/Header";
import ItemsContent from "./ItemsContent";

import MostPopularSlider from "./MostPopularSlider";
import highlightImage from "shared/assets/images/highlight-image.png";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <HeaderTopbar />
      {/* <MostPopularSlider /> */}

      <div className="hero">
        <div className="info">
          <h1>O primeiro Sorvete na Pedra em Pindamonhangaba.</h1>
          <h4>Shopping Pátio Pinda. Delivery com ENTREGA GRÁTIS!</h4>
          <button>Fazer um pedido</button>
        </div>

        <figure>
          <Image src={highlightImage} width="616px" height="606px" />
        </figure>
      </div>

      <div className="content">
        <div className="info">
          <section>
            <h1>Ice Cream Soft</h1>
            <span>Aberto</span>
          </section>

          <section>
            <button>Ver horarios</button>
            <button>Entrega</button>
          </section>
        </div>

        <ItemsContent />
      </div>
    </Container>
  );
};

export default Home;
