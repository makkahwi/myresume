import PagesLayout from "@/layout/PagesLayout";
import BlogSection, { post } from "@/sections/home/blog";

const BlogPage = ({ posts }: { posts: post[] }) => {
  return (
    <PagesLayout>
      <BlogSection page posts={posts} />
    </PagesLayout>
  );
};

export default BlogPage;
