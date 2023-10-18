import { Fragment } from "react";
import AboutSection from "sections/home/about";
import WelcomeSection from "sections/home/welcome";

const HomePage = () => {
  return (
    <Fragment>
      <WelcomeSection />
      <AboutSection />
    </Fragment>
  );
};

export default HomePage;
