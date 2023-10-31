import {
  faBriefcase,
  faCode,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageSection from "components/pageSection";
import Typography from "components/typography";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

const BackgroundSection = () => {
  const careers = [
    {
      title: "Web Development",
      desc: "8 years of web developing many solutions, systems and applications on various scales. Almost covered all technical aspects of the process, starting with system features plan & design, and ending up with building the infrastructure and deliver the product. It also covered the soft skills of team leadership, team development planning and so many things. Most notable works are the building of web application of Jordan's public services platform of Sanad, and Jordan's Land and Survey Department digital services portal.",
      icon: faCode,
    },
    {
      title: "Graphics & UI Design",
      desc: "3 years as graphic & UI designer to know the basics, learn many tricks and understand how to signify good vs bad designs. Since adopting web development career, designing was a practise on the side to keep the skills and to build designs for projects when needed. Many web application designs were built, beside a lot of graphic designing works like rebuilding foundation brand identities.",
      icon: faPaintBrush,
    },
    {
      title: "Managment Works",
      desc: "Had an experience for 3 years in doing management-related jobs of secretary and financial management, which established the skills of work documentation and organization beside the work of foundational cumulative experience build.",
      icon: faBriefcase,
    },
  ];

  return (
    <PageSection title="Professional Background">
      <Row>
        {careers.map(({ title, desc, icon }, i) => (
          <Col md={4} key={i}>
            <Card>
              <CardBody>
                <CardTitle>
                  <Typography size={3} justify="center" className="my-4">
                    {title}
                  </Typography>
                </CardTitle>

                <Typography
                  size={1}
                  justify="center"
                  color="warning"
                  style={{ fontSize: "5vw" }}
                  className="my-5"
                >
                  <FontAwesomeIcon icon={icon} />
                </Typography>

                <CardText>
                  <Typography size={6} className="lh-lg">
                    {desc}
                  </Typography>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

export default BackgroundSection;
