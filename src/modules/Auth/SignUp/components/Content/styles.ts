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

  h1 {
    color: #1a1a1a;
    font-weight: 600;
  }

  form {
    display: flex;
    flex-direction: column;

    margin: 1.5rem 0 1rem;

    row-gap: 0.5rem;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
