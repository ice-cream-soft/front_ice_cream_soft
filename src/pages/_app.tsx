import type { AppProps } from "next/app";
import { GlobalStyle } from "shared/styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
