import { getSemesteerBlogEnPosts } from "@/api";
import { revalidationTimer } from "@/consts/data";
import PagesLayout from "@/layout/PagesLayout";
import BlogSection, { post } from "@/sections/home/blog";

export const getServerSideProps = async () => {
  let posts: post[] = [];

  await getSemesteerBlogEnPosts().then(
    (res: { data: post[] }) =>
      (posts = res.data
        ?.filter(({ category }) => category === "Articles")
        .map(({ category, ...rest }) => ({
          ...rest,
          category: "Digitizing Education",
        })))
  );

  return {
    props: {
      posts,
      revalidate: revalidationTimer,
    },
  };
};

const BlogPage = ({ posts }: { posts: post[] }) => {
  return (
    <PagesLayout>
      <BlogSection page posts={posts} />
    </PagesLayout>
  );
};

export default BlogPage;
