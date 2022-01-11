import styled, { css } from "styled-components";

interface IContainerProps {
  primary?: boolean;
}

export const Container = styled.button<IContainerProps>`
  border-radius: 10px;

  border: 0px;
  padding: 1.5rem 1rem;
  color: rgb(49, 46, 56);

  width: 100%;
  max-width: 300px;

  font-weight: 500;
  font-size: 1rem;

  background: transparent;
  color: #ef621e;

  ${(props) =>
    props.primary &&
    css`
      background: #ef621e;
      color: #fffcd9;
    `}
`;
