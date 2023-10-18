import Script from "next/script";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-Q3F7EETTSK"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Q3F7EETTSK');
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
};

export default MyApp;