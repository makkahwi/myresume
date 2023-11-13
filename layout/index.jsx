import { Fragment } from "react";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="mx-0 mb-0 p-0 w-100 pb-5">{children}</div>

      <Footer />
    </Fragment>
  );
};

export default Layout;
