import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100vw;

  background: #fd9d47;
  box-shadow: inset 0 -1px 0 #dcdcdc; ;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 1460px;
  padding: 0 2rem;

  figure {
    height: 80px;
    width: 80px;
    cursor: pointer;
  }

  svg {
    font-size: 30px;
    min-width: 30px;
    min-height: 30px;
    color: #321409;
  }
`;

export const HeaderOptions = styled.div`
  display: flex;
  justify-content: space-between;

  width: max-content;

  color: #321409;

  button,
  a {
    min-width: max-content;
    color: inherit;
    color: inherit;
  }

  button {
    margin-right: 0.5rem;

    transition: transform 0.4s;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;

  color: #ef621e;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;

  svg {
    margin: 0 0.5rem;
  }
`;
