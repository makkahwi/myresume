import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-slideshow-image/dist/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./style.scss";
import "./style.css";
import ScrollUpButton from "@/components/ScrollUp";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suhaib Ahmad",
  description: "Senior Full-Stack Developer",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html dir="ltr" lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WDD6QTCBFJ"
      />

      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WDD6QTCBFJ');
          `}
      </Script>

      <head>
        <link rel="icon" href="/FavIcon.jpg" sizes="any" />
      </head>

      <body className={inter.className}>
        <main>{children}</main>
        <ScrollUpButton />
      </body>
    </html>
  );
};

export default Layout;
