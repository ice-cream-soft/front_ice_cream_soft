import type { AppProps } from "next/app";
import OptionsModal from "shared/components/organisms/OptionsModal";
import ContextProvider from "shared/providers/context";

import Head from "shared/seo/Head";
import { GlobalStyle } from "shared/styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Head />
      <Component {...pageProps} />
      <GlobalStyle />

      <OptionsModal />
    </ContextProvider>
  );
}

export default MyApp;
