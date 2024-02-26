import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-slideshow-image/dist/styles.css";
import "./style.scss";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noor Kayyal",
  description: "Unlock Your Potential",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html dir="ltr" lang="en">
      <head>
        <link rel="icon" href="/FavIcon.jpg" sizes="any" />
      </head>

      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
