import PageSection from "components/pageSection";
import Typography from "components/typography";
import { Col, Row } from "reactstrap";

const ProjectsSection = () => {
  const projects = [
    {
      logo: "semesteer.png",
      texts: [
        "This was the solution I developed within a school, tested it and validated the concept. And going to be the flagship of the projects I did or will start working on.",
        "It is about centralizing, organizing, offering online, analyzing, informing and alerting all the education process parties of the data updated of the students of a school.",
        "So a school would acquire the solution, feed it with the initial data of the education process with out help, and then start updating the data, engaging all school staff, all the students and their families.",
        "This project already gained funds and a team is working on its further development and Go-To-Market plan execution. For all the details, check its website @ https://www.semesteer.com.",
      ],
      website: "https://www.semesteer.com/",
      highlight: true,
    },
    {
      logo: "teamsline.png",
      texts: [
        "As Semesteer requested to have all the staff data and have own access to the system, the second most important matter within a school was to organize its HR management, work reporting and all staff-to-staff issues. And that’s how TeamsLine was born.",
        "TeamsLine is a human resources management system (HRMS), merged with tasks and works reporting system, which will be possible to be integrated with Semesteer to use the same user data of schools staff and management.",
        "The MVP of it was built already and it is now being tested by a client to validate it and update it before its launch.",
      ],
      website: "http://teamsline.com/",
    },
    {
      logo: "learngine.png",
      texts: [
        "The third matter to take care of is to help students with their educational journey, even outside school time. So Learngine will help school teachers to feed their students more educational materials to meet their various needs, and even allow them (students) to test and practice and evaluate their progress of academic work.",
        "This is still on the process of developing it from an idea to an MVP.",
      ],
    },
  ];

  return projects.map(({ logo, texts, highlight, website }, i) => (
    <PageSection
      color={highlight ? "warning" : i % 2 === 0 ? "secondary" : "light"}
      key={i}
    >
      <Row className="align-items-center">
        <Col md={6} className={`text-center order-${i % 2 === 0 ? "1" : "2"}`}>
          {website ? (
            <a href={website} target="_blank">
              <img src={`/images/${logo}`} width="65%" />
            </a>
          ) : (
            <img src={`/images/${logo}`} width="65%" />
          )}
        </Col>

        <Col md={6} className={`text-center order-${i % 2 === 0 ? "2" : "1"}`}>
          {texts.map((text, y) => (
            <Typography
              size={4}
              className="my-5"
              color={highlight ? "white" : i % 2 === 0 ? "white" : "dark"}
              key={y}
            >
              {text}
            </Typography>
          ))}
        </Col>
      </Row>
    </PageSection>
  ));
};

export default ProjectsSection;
