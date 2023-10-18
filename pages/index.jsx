import { Fragment } from "react";
import AboutSection from "sections/home/about";
import CurrentWorksSection from "sections/home/currentWorks";
import StatsSection from "sections/home/stats";
import WelcomeSection from "sections/home/welcome";

const HomePage = () => {
  return (
    <Fragment>
      <WelcomeSection />

      <AboutSection />

      <StatsSection />

      <CurrentWorksSection />
    </Fragment>
  );
};

export default HomePage;
