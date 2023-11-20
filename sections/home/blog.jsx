import PageSection from "components/pageSection";
import { useState } from "react";
import { Button, CardSubtitle, CardTitle, Col, Row } from "reactstrap";

import CardComp from "components/Card";
import Link from "next/link";
import BlogFilter from "./blogFilter";
import BlogPostViewer from "./blogPost";

const BlogSection = ({ page, posts }) => {
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedArticle, setPickedArticle] = useState({ title: "" });
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
                <CardTitle tag="h6" className="text-dark">
                  {title}
                </CardTitle>

                <CardSubtitle className="text-muted" tag="small">
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
              <Button onClick={() => setPageSize((current) => current + 4)}>
                Show More
              </Button>
            </Col>
          ) : (
            ""
          )
        ) : (
          <Col md={12} className="mb-4 text-center">
            <Link href="/blog">
              <Button>Show More</Button>
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
