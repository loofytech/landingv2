import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (<Provider store={store}>
    <Head>
      <title>Loofytech</title>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
    <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-0K0K6FHSZV" />
    <Script strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0K0K6FHSZV', {
          page_path: window.location.pathname,
        });
      `}
    </Script>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </Provider>);
}
