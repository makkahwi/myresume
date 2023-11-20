import { Fragment } from "react";

import NavbarComp from "./Navbar";
import PagesHeader from "./PagesHeader";
import { useRouter } from "next/router";

const PagesLayout = ({ children }) => {
  const navigation = useRouter();
  return (
    <Fragment>
      <NavbarComp />

      <PagesHeader title={navigation.route.replace("/", "").toUpperCase()} />

      <div className="mx-0 mb-0 p-0 w-100 pb-5">{children}</div>
    </Fragment>
  );
};

export default PagesLayout;
