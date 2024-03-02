import ScrollUpButton from "@/components/ScrollUp";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "react-slideshow-image/dist/styles.css";
import "./style.scss";
import "./style.css";
import { Alert } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suhaib Ahmad",
  description: "Senior Full-Stack Developer",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html dir="ltr" lang="en">
      <head>
        <link rel="icon" href="/FavIcon.jpg" sizes="any" />
      </head>

      <body className={inter.className}>
        <main>
          {children}

          <Alert variant="info" className="position-fixed bottom-0 start-0 m-5">
            This is still under development. So the best is yet to come.
          </Alert>
        </main>

        <ScrollUpButton />

        <Script
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WDD6QTCBFJ"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WDD6QTCBFJ');
          `}
        </Script>
      </body>
    </html>
  );
};

export default Layout;
