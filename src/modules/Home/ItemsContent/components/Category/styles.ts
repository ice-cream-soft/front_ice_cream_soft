import styled from "styled-components";

export const CategoryContainer = styled.div`
  button {
    width: 100%;
    height: 60px;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 60px;

    .item {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 425px;
      margin: 1rem;

      cursor: pointer;

      .info {
        display: flex;
        flex-direction: column;

        color: #321409;
        margin-left: 0.5rem;
      }
    }
  }
`;
