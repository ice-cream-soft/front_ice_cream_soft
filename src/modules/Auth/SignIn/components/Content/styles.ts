import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 40vw;

  img {
    width: 150px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
