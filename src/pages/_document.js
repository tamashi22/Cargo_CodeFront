import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://maps-sdk.trimblemaps.com/v3/trimblemaps-3.10.0.css"
          rel="stylesheet"
        ></link>
        <script src="https://maps-sdk.trimblemaps.com/v3/trimblemaps-3.10.0.js"></script>
        <script src="https://maps-sdk.trimblemaps.com/addon/trimblemaps-mapmenus-1.0.4.js"></script>

        <link
          href="https://maps-sdk.trimblemaps.com/addon/trimblemaps-mapmenus-1.0.4.css"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
