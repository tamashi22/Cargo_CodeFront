import "@/styles/globals.scss";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/redux/store";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CargoCode</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
