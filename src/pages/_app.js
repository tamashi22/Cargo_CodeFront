import "@/styles/globals.scss";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CargoCode</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
