import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 60vw;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
