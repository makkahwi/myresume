"use client";

import NavbarComp from "@/layout/Navbar";
import AboutSection from "@/sections/home/about";
import BackgroundSection from "@/sections/home/background";
import BlogSection from "@/sections/home/blog";
import CurrentWorksSection from "@/sections/home/currentWorks";
import WelcomeSection from "@/sections/home/welcome";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <WelcomeSection />

      <NavbarComp />

      <AboutSection />

      {/* <StatsSection /> */}

      <BackgroundSection />

      <CurrentWorksSection />

      <BlogSection posts={[]} />
    </Fragment>
  );
}
