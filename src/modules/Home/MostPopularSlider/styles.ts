import styled from "styled-components";

export const MostPopularContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const MostPopularContent = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 1400px;
  max-height: 350px;

  .alice-carousel {
    &,
    div {
      height: 100%;
    }
  }

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn,
  .alice-carousel__dots {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
