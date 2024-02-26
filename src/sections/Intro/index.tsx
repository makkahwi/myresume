import AboutIntroSection from "@/sections/Intro/Intro";
import EducationSection from "@/sections/Intro/WhoAmI";
import { Fragment } from "react";

const IntroSections = () => {
  return (
    <Fragment>
      <AboutIntroSection />

      <EducationSection />
    </Fragment>
  );
};

export default IntroSections;
