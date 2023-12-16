import LandingPopUp from "components/LandingPopUp";
import { Fragment } from "react";
import CtaSection from "sections/home/cta";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <LandingPopUp />

      <div className="mx-0 mb-0 p-0 w-100 pb-5">{children}</div>

      <CtaSection />
      <Footer />
    </Fragment>
  );
};

export default Layout;
