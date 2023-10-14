import Script from "next/script";
import { Fragment } from "react";

import "@/public/css/animate.min.css";
import "@/public/css/bootstrap.min.css";
import "@/public/css/remixicon.css";
import "@/public/css/styles.css";

const MyApp = ({ Component, pageProps }) => {
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

      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
