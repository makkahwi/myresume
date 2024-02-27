import BusinessFacilitationSections from "@/sections/BusinessFacilitation";
import ProjectsSection from "@/sections/BusinessFacilitation/Projects";
import SkillsSection from "@/sections/Coaching/Achievements";
import FooterSection from "@/sections/Footer";
import HeaderSection from "@/sections/Header";
import IntroSections from "@/sections/Intro";
import NavbarComp from "@/sections/Navbar";
import TailSections from "@/sections/Tail";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <NavbarComp />

      <HeaderSection />

      <IntroSections />

      <SkillsSection />

      <BusinessFacilitationSections />

      <ProjectsSection />

      <TailSections />

      <FooterSection />
    </Fragment>
  );
};

export default HomePage;
