import ProjectsSection from "@/sections/Projects";
import ContactSection from "@/sections/Contact";
import EducationSection from "@/sections/Education";
import ExperiencesSection from "@/sections/Experiences";
import FooterSection from "@/sections/Footer";
import HeaderSection from "@/sections/Header";
import NavbarComp from "@/sections/Navbar";
import SkillsSection from "@/sections/Skills";
import { Fragment } from "react";
import AboutSection from "@/sections/About";

const HomePage = () => {
  return (
    <Fragment>
      <NavbarComp />

      <HeaderSection />

      <AboutSection />

      <EducationSection />

      <SkillsSection />

      <ExperiencesSection />

      <ProjectsSection />

      <ContactSection />

      <FooterSection />
    </Fragment>
  );
};

export default HomePage;
