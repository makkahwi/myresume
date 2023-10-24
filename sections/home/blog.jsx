import PageSection from "components/pageSection";
import { useState } from "react";
import { Card, CardBody, CardSubtitle, CardTitle, Col, Row } from "reactstrap";
import BlogFilter from "./blogFilter";
import BlogPostViewer from "./blogPost";

const BlogSection = ({ posts }) => {
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedArticle, setPickedArticle] = useState({ title: "" });

  return (
    <PageSection title="My Blog" id="blog">
      <BlogFilter setPickedCategory={setPickedCategory} />

      <Row className="justify-content-center">
        {posts
          ?.filter(({ category }) =>
            pickedCategory ? category === pickedCategory : true
          )
          ?.map(({ category, date, image, title, body }, i) => (
            <Col md={3} className="mb-4" key={i}>
              <Card
                onClick={() =>
                  setPickedArticle({ category, date, image, title, body })
                }
                style={{ cursor: "pointer" }}
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
      </Row>

      <BlogPostViewer
        pickedArticle={pickedArticle}
        setPickedArticle={setPickedArticle}
      />
    </PageSection>
  );
};

export default BlogSection;
