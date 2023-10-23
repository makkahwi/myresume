import PageSection from "components/pageSection";
import Typography from "components/typography";
import { Col, Row } from "reactstrap";

const CurrentWorksSection = () => {
  const works = [
    {
      title: "Semesteer",
      desc: "The flagship project of building a revolutionary SaaS service of student information system. MVP was developed & tested already, and Go-To-Market plan is now in execution.",
    },
    {
      title: "TeamsLine",
      desc: "A supporting product to help managing the staff of the educational institute. MVP was build and now under progress of testing & updating.",
    },
    {
      title: "Learngine",
      desc: "Another supporting product to cover the needs of digitizing the learning communication of students & their instructors. Product MVP is now buidling built to be tested by pilot client.",
    },
  ];

  return (
    <PageSection
      title="My Works"
      subtitle="What I'm Fully Dedicated to Make Happen"
      color="secondary"
    >
      <Row>
        {works.map(({ title, desc }, i) => (
          <Col md={4} key={i}>
            <Typography
              size={3}
              className="py-5"
              color="white"
              justify="center"
            >
              {title}
            </Typography>
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

export default CurrentWorksSection;
