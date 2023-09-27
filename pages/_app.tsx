import Script from "next/script";
import { Fragment } from "react";

import RootLayout from "./layout";

import "../public/css/style.css";
import "bootstrap/dist/css/bootstrap.css";

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  return (
    <Fragment>
      {/* Google tag (gtag.js) */}
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

      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Fragment>
  );
};

export default MyApp;
