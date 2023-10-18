import { Fragment } from "react";
import AboutSection from "sections/home/about";
import StatsSection from "sections/home/stats";
import WelcomeSection from "sections/home/welcome";

const HomePage = () => {
  return (
    <Fragment>
      <WelcomeSection />
      <AboutSection />
      <StatsSection />
    </Fragment>
  );
};

export default HomePage;
