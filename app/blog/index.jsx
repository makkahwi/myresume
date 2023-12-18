import { getSemesteerBlogEnPosts } from "@/api";
import { revalidationTimer } from "@/consts/data";
import PagesLayout from "@/layout/PagesLayout";
import BlogSection from "@/sections/home/blog";

export const getServerSideProps = async () => {
  let posts = [];

  await getSemesteerBlogEnPosts().then(
    (res) =>
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

const BlogPage = ({ posts }) => {
  return (
    <PagesLayout>
      <BlogSection page posts={posts} />
    </PagesLayout>
  );
};

export default BlogPage;
