import { Fragment } from "react";
import AboutSection from "sections/home/about";
import BlogSection from "sections/home/blog";
import CtaSection from "sections/home/cta";
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

      <BlogSection />

      <CtaSection />
    </Fragment>
  );
};

export default HomePage;
