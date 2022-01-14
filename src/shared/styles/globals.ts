import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
  }
  
  body {
    width: 100vw;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }
  
  button {
    cursor: pointer;
  }

  body, input, button {
    font-family: 'Inter', serif;
    font-size: 1rem;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  @media (max-width: 1680px) {
    html {
      font-size: 94.75%;
    }
  }

  @media (max-width: 1440px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 1360px) {
    html {
      font-size: 81.25%;
    }
  }
  
`;
