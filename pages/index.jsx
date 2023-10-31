import { getBlogEnPosts } from "api";
import { Fragment } from "react";
import AboutSection from "sections/home/about";
import BlogSection from "sections/home/blog";
import CtaSection from "sections/home/cta";
import CurrentWorksSection from "sections/home/currentWorks";
import StatsSection from "sections/home/stats";
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
      <WelcomeSection />

      <AboutSection />

      {/* <StatsSection /> */}

      <CurrentWorksSection />

      <BlogSection posts={posts} />

      <CtaSection />
    </Fragment>
  );
};

export default HomePage;
