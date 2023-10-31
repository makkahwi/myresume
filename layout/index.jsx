import { Fragment } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />

      <div className="mx-0 mb-0 p-0 w-100 py-5">{children}</div>

      <Footer />
    </Fragment>
  );
};

export default Layout;
