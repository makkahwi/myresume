import PageSection from "components/pageSection";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

import BlogFilter from "./blogFilter";
import BlogPostViewer from "./blogPost";

const BlogSection = ({ posts }) => {
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedArticle, setPickedArticle] = useState({ title: "" });
  const [pageSize, setPageSize] = useState(4);

  return (
    <PageSection
      title="Insights Corner"
      subtitle="Exploring Ideas, Trends, and Perspectives"
      id="blog"
    >
      <BlogFilter setPickedCategory={setPickedCategory} />

      <Row className="justify-content-center">
        {posts
          ?.filter(
            ({ category }, i) =>
              (pickedCategory ? category === pickedCategory : true) &&
              i < pageSize
          )
          ?.map(({ category, date, image, title, body }, i) => (
            <Col md={3} className="mb-4" key={i}>
              <Card
                onClick={() =>
                  setPickedArticle({ category, date, image, title, body })
                }
                role="button"
              >
                <img alt="Sample" src={image} width="100%" />
                <CardBody>
                  <CardTitle tag="h6">{title}</CardTitle>

                  <CardSubtitle className="text-muted" tag="small">
                    {date}
                  </CardSubtitle>

                  {/* <CardText tag="p" className="text-justify my-3">
                    {body[0]?.content.slice(0, 70)}
                  </CardText> */}
                </CardBody>
              </Card>
            </Col>
          ))}

        {posts?.filter(({ category }) =>
          pickedCategory ? category === pickedCategory : true
        ).length >= pageSize ? (
          <Col md={12} className="mb-4 text-center">
            <Button onClick={() => setPageSize((current) => current + 4)}>
              Show More
            </Button>
          </Col>
        ) : (
          ""
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
