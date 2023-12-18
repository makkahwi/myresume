"use client";

import { getSemesteerBlogEnPosts } from "@/api";
import NavbarComp from "@/layout/Navbar";
import { defaultPost } from "@/sections/home/blog";
import { Fragment, useEffect, useState } from "react";
// import { GetServerSideProps } from "next";
// import { revalidationTimer } from "@/consts/data";
import { post } from "@/sections/home/blog";
import dynamic from "next/dynamic";

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

  const WelcomeSection = dynamic(() => import("@/sections/home/welcome"));
  const CurrentWorksSection = dynamic(
    () => import("@/sections/home/currentWorks")
  );
  const BlogSection = dynamic(() => import("@/sections/home/blog"));
  const BackgroundSection = dynamic(() => import("@/sections/home/background"));
  const AboutSection = dynamic(() => import("@/sections/home/about"));

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
