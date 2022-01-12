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
    cursor: pointer;
  }

  h1 {
    color: #1a1a1a;

    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  form {
    display: flex;
    flex-direction: column;

    margin: 1.5rem 0 1rem;
    padding: 0 1rem;
    row-gap: 0.5rem;

    width: 100%;
    max-width: 350px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
