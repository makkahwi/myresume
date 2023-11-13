import { Fragment } from "react";

import NavbarComp from "./Navbar";

const PagesLayout = ({ children }) => {
  return (
    <Fragment>
      <NavbarComp fixed />

      <div className="mx-0 mb-0 p-0 w-100 py-5">{children}</div>
    </Fragment>
  );
};

export default PagesLayout;
