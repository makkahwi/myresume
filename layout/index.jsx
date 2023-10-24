import { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />

      <div className="mx-0 mb-0 p-0 w-100" style={{ marginTop: "11vh" }}>
        {children}
      </div>

      <Footer />
    </Fragment>
  );
};

export default Layout;
