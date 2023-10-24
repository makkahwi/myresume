import PageSection from "components/pageSection";
import Typography from "components/typography";
import { Col, Row } from "reactstrap";

const CurrentWorksSection = () => {
  const products = [
    { name: "Semesteer", link: "https://www.semesteer.com/" },
    { name: "TeamsLine", link: "http://teamsline.com/" },
    { name: "Learngine", link: "https://www.alembicsoft.com/" },
  ];

  return (
    <PageSection
      title="My Works"
      subtitle="What I'm Fully Dedicated to Make Happen"
      color="secondary"
      id="works"
    >
      <Row>
        {products.map(({ name, link }, i) => (
          <Col md={4} key={i}>
            <Typography
              size={3}
              className="py-5"
              color="white"
              justify="center"
            >
              <a
                href={link}
                target="_blank"
                className="text-decoration-none text-inherit"
              >
                {name}
              </a>
            </Typography>
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

export default CurrentWorksSection;
