import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import Head from "next/head";
import { Fragment } from "react";

export const metadata = {
  title: "Suhaib Ahmad - Resume Website",
  description: "Suhaib Ahmad Resume Website",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{metadata.title}</title>
      </Head>

      <body
        className="bg-light"
        style={{
          backgroundImage: 'url("images/BG3.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          overflowX: "hidden",
        }}
      >
        <div
          className="card border border-1"
          style={{
            height: "89vh",
            width: "95vw",
            margin: "5vh 2.5vw",
          }}
        >
          <div className="card-body p-0 row g-0 border-0 w-100">
            <div
              className="col-md-5 p-4 m-0 text-center text-white bg-theme"
              style={{
                backgroundImage: 'url("images/BG4.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center right",
                height: "89vh",
              }}
            >
              <Header />
            </div>

            <div
              className="col-md-1 p-0 m-0"
              style={{
                height: "89vh",
              }}
            >
              <Navbar />
            </div>

            <div
              className="col-md-6 px-5 py-4 m-0"
              style={{
                backgroundImage: 'url("images/BG2.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                height: "89vh",
                overflowY: "scroll",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default RootLayout;