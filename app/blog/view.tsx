import PagesLayout from "@/layout/PagesLayout";
import { post } from "@/sections/home/blog";
import dynamic from "next/dynamic";

const BlogPage = ({ posts }: { posts: post[] }) => {
  const BlogSection = dynamic(() => import("@/sections/home/blog"));

  return (
    <PagesLayout>
      <BlogSection page posts={posts} />
    </PagesLayout>
  );
};

export default BlogPage;
