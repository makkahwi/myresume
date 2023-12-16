import { getBlogEnPosts } from "api";
import LandingPopUp from "components/LandingPopUp";
import NavbarComp from "layout/Navbar";
import { Fragment } from "react";
import AboutSection from "sections/home/about";
import BackgroundSection from "sections/home/background";
import BlogSection from "sections/home/blog";
import CurrentWorksSection from "sections/home/currentWorks";
import WelcomeSection from "sections/home/welcome";

export const getServerSideProps = async () => {
  let posts = [];

  await getBlogEnPosts().then(
    (res) =>
      (posts = res.data
        ?.filter(({ category }) => category === "Articles")
        .map(({ category, ...rest }) => ({
          ...rest,
          category: "Digitizing Education",
        })))
  );

  return {
    props: { posts },
  };
};

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <LandingPopUp />
      <WelcomeSection />
      <NavbarComp />

      <AboutSection />

      {/* <StatsSection /> */}

      <BackgroundSection />

      <CurrentWorksSection />

      <BlogSection posts={posts} />
    </Fragment>
  );
};

export default HomePage;
