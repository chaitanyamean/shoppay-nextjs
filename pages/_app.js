import "../styles/globals.scss";

import { Provider } from "react-redux";
import store from "../store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Head from "next/head";

let persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  console.log("COMP", Component, pageProps);
  return (
    <>
      <Head>
        <title>Shop Pay</title>
        <meta name="Description" content="this is content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
