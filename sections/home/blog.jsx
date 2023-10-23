import {
  faArrowsRotate,
  faCode,
  faLaptop,
  faPaintBrush,
  faSchool,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBlogEnPosts } from "api";
import PageSection from "components/pageSection";
import { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    await getBlogEnPosts().then((res) => setPosts(res.data));
  }, []);

  const buttons = [
    { text: "All", category: "", icon: faArrowsRotate },
    {
      text: "Digitizing Education",
      category: "Digitizing Education",
      icon: faSchool,
    },
    {
      text: "Entrepreneurship",
      category: "Entrepreneurship",
      icon: faSeedling,
    },
    {
      text: "Web Dev Career",
      category: "Web Dev Career",
      icon: faCode,
    },
    {
      text: "Other Digital-Related Career",
      category: "Other Digital-Related Career",
      icon: faLaptop,
    },
    {
      text: "Graphic Design Career",
      category: "Graphic Design Career",
      icon: faPaintBrush,
    },
  ];

  return (
    <PageSection title="My Blog">
      <ButtonGroup className="my-5 w-100">
        {buttons.map(({ text, category, icon }, i) => (
          <Button color={i % 2 === 1 ? "warning" : "secondary"} key={i}>
            <FontAwesomeIcon icon={icon} className="me-2" />
            <span>{text}</span>
          </Button>
        ))}
      </ButtonGroup>

      <Row className="justify-content-center">
        {posts
          ?.filter(({ category }) => category === "Articles")
          ?.map(({ category, date, image, title, body }, i) => (
            <Col md={3} className="mb-4" key={i}>
              <Card>
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
    </PageSection>
  );
};

export default BlogSection;
