import styled, { css } from "styled-components";

interface IContainerProps {
  reverse?: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  height: 100vh;

  background: #fffcd9;

  ${(props) =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
    `}
`;
