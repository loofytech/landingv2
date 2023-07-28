import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (<Provider store={store}>
    <Head>
      <title>Loofytech</title>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </Provider>);
}
