import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div.content {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1400px;

    .info {
      display: flex;
      justify-content: space-between;
      margin: 2rem 1rem;

      width: 100%;

      section {
        display: flex;
        align-items: center;

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          height: max-content;

          background: green;
          color: #fff;

          padding: 0.5rem 0.75rem;
          border-radius: 0.25rem;

          font-size: 14px;
          font-weight: 500;

          margin: 0 1rem;
        }
      }

      h1 {
        font-size: 2.25rem;
        line-height: 44px;
        margin-bottom: 0;
        color: #321409;
      }
    }
  }
`;
