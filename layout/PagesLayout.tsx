import { Fragment } from "react";

import NavbarComp from "./Navbar";
import PagesHeader from "./PagesHeader";
import { useRouter, usePathname } from "next/navigation";

interface props {
  children: React.ReactNode;
}

const PagesLayout = ({ children }: props) => {
  const pathname = usePathname();

  return (
    <Fragment>
      <NavbarComp />

      <PagesHeader title={pathname.replace("/", "").toUpperCase()} />

      <div className="mx-0 mb-0 p-0 w-100 pb-5">{children}</div>
    </Fragment>
  );
};

export default PagesLayout;
