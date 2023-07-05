import store from "@/redux/store";
import { Html, Head, Main, NextScript } from "next/document";
import { Provider } from "react-redux";

export default function Document() {
    return ( <Html lang = "en" >
        <Head >
        <link href = "https://maps-sdk.trimblemaps.com/v3/trimblemaps-3.10.0.css"
        rel = "stylesheet" >
        </link> <script src = "https://maps-sdk.trimblemaps.com/v3/trimblemaps-3.10.0.js" > </script> <script src = "https://maps-sdk.trimblemaps.com/addon/trimblemaps-mapmenus-1.0.4.js" > </script> <link rel = "stylesheet"href = "https://maps-sdk.trimblemaps.com/addon/trimblemaps-mapmenus-1.0.4.css" />
        </Head> 
            <body >
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}