import "@/styles/globals.scss";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/redux/store";
export default function App({ Component, pageProps }) {
  return (
    <div className="page_holder">
      <Head>
        <title>CargoCode</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
