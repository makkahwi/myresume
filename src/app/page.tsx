import BusinessFacilitationSections from "@/sections/BusinessFacilitation";
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

      <TailSections />

      <FooterSection />
    </Fragment>
  );
};

export default HomePage;
