import styled from "styled-components";

export const Link = styled.a`
  margin-top: 1rem;
  text-decoration: none;
  color: #321409;

  transition: 0.4s transform;

  &:hover {
    transform: translateX(+5px);
  }
`;
