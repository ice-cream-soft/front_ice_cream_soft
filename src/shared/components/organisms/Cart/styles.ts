import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;

  button {
    display: flex;
    align-items: center;

    width: 100%;
    background: none;
    border: none;

    svg {
      margin: 0 0.5rem;
    }
  }
`;

export const CartContent = styled.div`
  position: absolute;
  top: 50px;
  left: -50%;

  width: max-content;
  background: #fff;
  padding: 1rem;
  box-shadow: 0 0 5px 0px #efefef;
`;
