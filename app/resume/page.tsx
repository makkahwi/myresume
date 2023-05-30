import { Fragment } from "react";

import Education from "./Education";
import Experiences from "./Experiences";
import Skills from "./Skills";

const Resume = () => {
  return (
    <Fragment>
      <Experiences />

      <Skills />

      <Education />
    </Fragment>
  );
};

export default Resume;
