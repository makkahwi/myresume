"use client";

import NavbarComp from "@/layout/Navbar";
import AboutSection from "@/sections/home/about";
import BackgroundSection from "@/sections/home/background";
import BlogSection, { defaultPost } from "@/sections/home/blog";
import CurrentWorksSection from "@/sections/home/currentWorks";
import WelcomeSection from "@/sections/home/welcome";
import { Fragment, useEffect, useState } from "react";
import { getSemesteerBlogEnPosts } from "@/api";
// import { GetServerSideProps } from "next";
// import { revalidationTimer } from "@/consts/data";
import { post } from "@/sections/home/blog";

interface props {
  posts: post[];
}

// export const getServerSideProps = (async () => {
//   let posts: post[] = [];

//   await getSemesteerBlogEnPosts().then(
//     (res: { data: post[] }) =>
//       (posts = res.data
//         ?.filter(({ category }) => category === "Articles")
//         .map(({ category, ...rest }) => ({
//           ...rest,
//           category: "Digitizing Education",
//         })))
//   );

//   return {
//     props: {
//       posts,
//       revalidate: revalidationTimer,
//     },
//   };
// }) satisfies GetServerSideProps<{ posts: post[] }>;

export default function Home() {
  const [posts, setPosts] = useState<post[]>([defaultPost]);

  useEffect(() => {
    getSemesteerBlogEnPosts().then((res: { data: post[] }) =>
      setPosts(
        res.data
          ?.filter(({ category }) => category === "Articles")
          .map(({ category, ...rest }) => ({
            ...rest,
            category: "Digitizing Education",
          }))
      )
    );
  }, []);

  return (
    <Fragment>
      <WelcomeSection />

      <NavbarComp />

      <AboutSection />

      {/* <StatsSection /> */}

      <BackgroundSection />

      <CurrentWorksSection />

      <BlogSection posts={posts} />
    </Fragment>
  );
}
