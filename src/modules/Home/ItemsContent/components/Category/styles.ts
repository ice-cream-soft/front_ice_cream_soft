import styled from "styled-components";

export const CategoryContainer = styled.div`
  button {
    width: max-content;

    border: 0;
    padding: 0 1.5rem;

    background: none;

    font-weight: 600;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 60px;

    .item {
    }
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  width: 100%;
  max-width: 425px;
  margin: 1rem;
  padding: 1rem;

  box-shadow: 0 0 16px 1px #f7f7f7;
  border-radius: 8px;

  cursor: pointer;

  transition: transform 0.4s;

  &:hover {
    transform: scale(1.025);
  }

  div.wrapper {
    position: relative;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  color: #321409;
  margin-left: 0.5rem;
  width: 100%;

  h4 {
    margin-bottom: 0.25rem;
  }
`;
