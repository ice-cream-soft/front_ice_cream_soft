import React from "react";

import HeaderTopbar from "shared/components/organisms/Header";
import ItemsContent from "./ItemsContent";

import MostPopularSlider from "./MostPopularSlider";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <HeaderTopbar />
      <MostPopularSlider />

      <div className="content">
        <div className="info">
          <section>
            <h1>Ice Cream Soft</h1>
            <span>Aberto</span>
          </section>

          <section>
            <button>Ver horarios</button>
            <button>Ver endereço</button>
            <button>Entrega</button>
          </section>
        </div>

        <ItemsContent />
      </div>
    </Container>
  );
};

export default Home;
