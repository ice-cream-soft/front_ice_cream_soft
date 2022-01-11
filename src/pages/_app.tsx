import type { AppProps } from "next/app";

import Head from "shared/seo/Head";
import { GlobalStyle } from "shared/styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
