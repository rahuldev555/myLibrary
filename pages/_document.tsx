import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends NextDocument {

  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;