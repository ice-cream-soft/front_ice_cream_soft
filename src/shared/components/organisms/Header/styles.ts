import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  background: #fefcd6;
  box-shadow: inset 0 -1px 0 #dcdcdc; ;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 1800px;
  padding: 0 2rem;

  img {
    height: 70px;
    width: 70px;
    cursor: pointer;
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
`;

export const Link = styled.a`
  display: flex;
  align-items: center;

  padding: 1rem;
  color: #ef621e;
  font-weight: 500;
`;
