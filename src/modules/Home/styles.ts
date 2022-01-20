import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div.hero {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: max-content;
    padding: 4rem 0;
    background: #fd9d47;

    div.info {
      width: 100%;
      max-width: 760px;

      padding: 0 6rem;

      h1 {
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 3.25rem;

        color: #311509;
      }

      h4 {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;

        color: #311509;
      }

      button {
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;

        color: #311509;

        border: none;
        cursor: pointer;
        background: #fff;
        padding: 1rem 2rem;
        border-radius: 32px;
        margin-top: 2rem;
      }
    }

    figure {
      display: flex;
      align-items: center;

      position: relative;
    }
  }

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

  @media (max-width: 900px) {
    div.hero {
      flex-direction: column-reverse;

      div.info {
        h1 {
          font-size: 2rem;
        }

        h4 {
          font-size: 1.25rem;
        }
      }

      div.info,
      figure {
        padding: 0 2rem;
      }
    }
  }
`;
