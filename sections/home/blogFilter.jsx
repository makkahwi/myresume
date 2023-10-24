import {
  faArrowsRotate,
  faCode,
  faLaptop,
  faSchool,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup } from "reactstrap";

const BlogFilter = ({ setPickedCategory }) => {
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
  ];

  return (
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
  );
};

export default BlogFilter;
