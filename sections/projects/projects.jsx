import PageSection from "components/pageSection";
import Typography from "components/typography";
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

const ProjectsSection = () => {
  const texts = [
    "I developed and tested this solution within a school environment for a whole year, successfully validating the concept.",
    "This project is my primary focus, aiming to centralize, organize, and streamline the education process by providing online tools for data analysis, information sharing, and timely alerts to all stakeholders involved.",
    "The solution is designed to be user-friendly: a school can easily input initial education data independently. Once set up, the platform facilitates ongoing updates, involving school staff, students, and their families.",
    "With initial funding secured, a dedicated team is actively working on the project's continued development and executing a Go-To-Market plan. For detailed information, please visit the project's website @ https://www.semesteer.com.",
    "Future plans include expanding the solution to digitze every corner of the education process going on & off-campus.",
  ];

  const appNestTexts = [
    "I have designed and built the architecture of a coming-soon open-source project of AppNest.",
    "This project is about building a tool to help the planning and execution of any future web application projects.",
    "I am supervising the team that is developing the code for the project, and soon we will launch the MVP for public testing.",
  ];

  return (
    <Fragment>
      <PageSection color="info">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <a href="https://www.semesteer.com/" target="_blank">
              <img src="/images/semesteer.png" width="65%" />
            </a>
          </Col>

          <Col md={6} className="text-center">
            {texts.map((text, y) => (
              <Typography size={4} className="my-5" color="white" key={y}>
                {text}
              </Typography>
            ))}
          </Col>
        </Row>
      </PageSection>

      <PageSection color="secondary">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            {appNestTexts.map((text, y) => (
              <Typography size={4} className="my-5" color="white" key={y}>
                {text}
              </Typography>
            ))}
          </Col>

          <Col md={6} className="text-center">
            <a href="https://sketcher-drab.vercel.app/" target="_blank">
              <img src="/images/appnest-w.png" width="65%" />
            </a>
          </Col>
        </Row>
      </PageSection>
    </Fragment>
  );
};

export default ProjectsSection;
