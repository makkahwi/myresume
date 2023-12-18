import { getBlogEnPosts } from "@/api";
import CardComp from "@/components/Card";
import PageSection from "@/components/pageSection";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useState } from "react";
import { Button, CardSubtitle, CardTitle, Col, Row } from "react-bootstrap";

import BlogFilter from "./blogFilter";
import BlogPostViewer from "./blogPost";

export interface postBody {
  type: string;
  content:
    | string
    | string[]
    | { title: string; link: string }[]
    | { body: string; author: string };
}

export interface post {
  category: string;
  date: string;
  image: string;
  title: string;
  body: object[];
}

export const defaultPost = {
  category: "",
  date: "",
  image: "",
  title: "",
  body: [{}],
};

interface props {
  page?: boolean;
  posts: post[];
}

export const getServerSideProps = (async () => {
  let posts: post[] = [];

  await getBlogEnPosts().then(
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
      revalidate: 60 * 60 * 24 * 5, // seconds * mins * hours * days
    },
  };
}) satisfies GetServerSideProps<{ posts: post[] }>;

const BlogSection = ({ page, posts }: props) => {
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedArticle, setPickedArticle] = useState<post>(defaultPost);
  const [pageSize, setPageSize] = useState(4);

  return (
    <PageSection
      title={page ? "" : "Insights Corner"}
      subtitle={page ? "" : "Exploring Ideas, Trends, and Perspectives"}
      id="blog"
    >
      {page && (
        <BlogFilter
          pickedCategory={pickedCategory}
          setPickedCategory={setPickedCategory}
        />
      )}

      <Row className="justify-content-center">
        {posts
          ?.filter(
            ({ category }, i) =>
              (pickedCategory ? category === pickedCategory : true) &&
              i < pageSize
          )
          ?.map(({ category, date, image, title, body }, i) => (
            <Col md={3} className="mb-4" key={i}>
              <CardComp
                onClick={() =>
                  setPickedArticle({ category, date, image, title, body })
                }
                color="dark"
                image={image}
              >
                <CardTitle as="h6" className="text-dark">
                  {title}
                </CardTitle>

                <CardSubtitle className="text-muted" as="small">
                  {date}
                </CardSubtitle>

                {/* <CardText tag="p" className="text-justify my-3">
                    {body[0]?.content.slice(0, 70)}
                  </CardText> */}
              </CardComp>
            </Col>
          ))}

        {page ? (
          posts?.filter(({ category }) =>
            pickedCategory ? category === pickedCategory : true
          ).length >= pageSize ? (
            <Col md={12} className="mb-4 text-center">
              <Button
                onClick={() => setPageSize((current) => current + 4)}
                variant="warning"
              >
                Show More
              </Button>
            </Col>
          ) : (
            ""
          )
        ) : (
          <Col md={12} className="mb-4 text-center">
            <Link href="/blog">
              <Button variant="warning">Show More</Button>
            </Link>
          </Col>
        )}
      </Row>

      <BlogPostViewer
        pickedArticle={pickedArticle}
        setPickedArticle={setPickedArticle}
      />
    </PageSection>
  );
};

export default BlogSection;
