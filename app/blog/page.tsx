"use client";

import View from "./index";
import { getSemesteerBlogEnPosts } from "@/api";
// import { GetServerSideProps } from "next";
// import { revalidationTimer } from "@/consts/data";
import { defaultPost, post } from "@/sections/home/blog";
import { useEffect, useState } from "react";

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

export default function Page() {
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

  return <View posts={posts} />;
}
