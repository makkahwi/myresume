import Typography from "components/typography";
import NavbarComp from "layout/Navbar";
import Link from "next/link";
import { Fragment } from "react";
import { Button, Navbar } from "reactstrap";

const ErrorPage = () => {
  return (
    <Fragment>
      <NavbarComp />

      <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
        <div className="text-center text-white">
          <Typography size={1} className="display-1 fw-bold" justify="center">
            404
          </Typography>

          <Typography size={3} className="fw-bold" justify="center">
            <span className="text-warning">Opps!</span> Page not found.
          </Typography>

          <Typography justify="center">
            The page you’re looking for doesn’t exist.
          </Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default ErrorPage;
