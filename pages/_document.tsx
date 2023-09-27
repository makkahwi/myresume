import Document, { Head, Html, Main, NextScript } from "next/document";

import { metadata } from "./layout";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || "en" };
  }

  render() {
    const { title, description } = metadata;

    return (
      <Html dir="ltr" lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/images/logo.png" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

          <meta name="description" content={description} />

          <meta property="og:url" content="https://Suhaib.dev/" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
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
