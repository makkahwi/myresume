import { appDesc, appTitle } from "@/consts/data";
import Footer from "@/layout/Footer";
import CtaSection from "@/sections/home/cta";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import "./global.scss";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: appTitle + " - " + appDesc,
  description: appTitle + " " + appDesc,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Fragment>
          <main className="mx-0 mb-0 p-0 w-100 pb-5">{children}</main>

          <CtaSection />
          <Footer />
        </Fragment>
      </body>
    </html>
  );
}
