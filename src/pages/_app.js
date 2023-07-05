import "@/styles/globals.scss";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/redux/store";
import AppSocketProvider from "@/components/AppSocketProvider";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CargoCode</title>
      </Head>
      <Provider store={store}>
        <AppSocketProvider>
          <Component {...pageProps} />
        </AppSocketProvider>
      </Provider>
    </>
  );
}

export default App;