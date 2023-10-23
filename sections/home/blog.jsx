import {
  faArrowsRotate,
  faClock,
  faClose,
  faCode,
  faLaptop,
  faPaintBrush,
  faSchool,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageSection from "components/pageSection";
import Typography from "components/typography";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

const BlogSection = ({ posts }) => {
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedArticle, setPickedArticle] = useState({ title: "" });

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

  const generateBodySections = (section) => {
    const { type, content } = section;

    switch (type) {
      case "text":
        return <h6 className="text-justify lh-lg fw-normal">{content}</h6>;
      case "orderedList":
        return (
          <ol>
            {content.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ol>
        );
      case "unorderedList":
        return (
          <ul>
            {content.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        );
      case "images":
        return (
          <ul className="wp-block-gallery columns-3">
            {content.map((image, i) => (
              <li className="blocks-gallery-item" key={i}>
                <figure>
                  <img src={image} alt="image" />
                </figure>
              </li>
            ))}
          </ul>
        );
      case "sources":
        return (
          <p className="text-justify lh-lg">
            {t("Sources")}
            {": "}
            {content.map(({ title, link }, i) => (
              <span key={i}>
                <a href={link} target="_blank">
                  {title}
                  {i < content.length - 1 ? ", " : ""}
                </a>
              </span>
            ))}
          </p>
        );
      case "title":
        return <h5 className="text-justify lh-lg">{content}</h5>;
      case "subtitle":
        return <h6 className="text-justify lh-lg">{content}</h6>;
      case "quote":
        return (
          <blockquote className="wp-block-quote">
            <p>{content.body}</p>

            <cite>{content.author}</cite>
          </blockquote>
        );
      default:
        return content;
    }
  };

  return (
    <PageSection title="My Blog">
      <ButtonGroup className="my-5 w-100">
        {buttons.map(({ text, category, icon }, i) => (
          <Button
            onClick={() => setPickedCategory(category)}
            color={i % 2 === 1 ? "warning" : "secondary"}
            key={i}
          >
            <FontAwesomeIcon icon={icon} className="me-2" />
            <span>{text}</span>
          </Button>
        ))}
      </ButtonGroup>

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

        <Modal isOpen={pickedArticle.title} size="xl">
          <ModalHeader>
            {pickedArticle.title}
            <Button
              color="ghost"
              onClick={() => setPickedArticle({ title: "" })}
            >
              <FontAwesomeIcon icon={faClose} />
            </Button>
          </ModalHeader>

          <ModalBody>
            <Row>
              <Col md={2}>
                <img src={pickedArticle.image} width="100%" />
              </Col>

              <Col md={10}>
                <Typography size={6}>
                  <FontAwesomeIcon icon={faClock} className="me-2" />
                  {pickedArticle.date}
                </Typography>
                <Typography size={4}>{pickedArticle.title}</Typography>
              </Col>

              <Col md={12} className="my-4">
                {pickedArticle.body?.map((body, i) => (
                  <Typography>{generateBodySections(body)}</Typography>
                ))}
              </Col>
            </Row>
          </ModalBody>

          <ModalFooter>
            <Button
              color="secondary"
              onClick={() => setPickedArticle({ title: "" })}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Row>
    </PageSection>
  );
};

export default BlogSection;
