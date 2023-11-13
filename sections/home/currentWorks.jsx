import PageSection from "components/pageSection";
import Typography from "components/typography";
import Link from "next/link";
import { Button, Col, Row } from "reactstrap";

const CurrentWorksSection = () => {
  const products = [
    {
      name: "Semesteer",
      link: "https://www.semesteer.com/",
      desc: "An online system that manages students data, and makes the most of it by extensive statistical analysis and planned AI-based data analysis. Product's V3 was built and currently under testing before soft-launching to Jordan's schools.",
      logo: "/images/semesteer.png",
    },
    {
      name: "TeamsLine",
      link: "http://www.teamsline.com/",
      desc: "A web app to manage school staff and provide the needs of HR managment, with option of integrating the same users database of Semesteer. MVP was built already and currently being tested by a client.",
      logo: "/images/teamsline.png",
    },
    {
      name: "Learngine",
      link: "https://www.alembicsoft.com/",
      desc: "A platform that will be integratable with Semesteer to manage students learning materials provided by schools. The MVP is currently under construction and an interested client is waiting to start validating and testing.",
      logo: "/images/learngine.png",
    },
  ];

  return (
    <PageSection
      title="Innovative Ventures"
      subtitle="Current Entrepreneurial Pursuits"
      color="warning"
      id="works"
    >
      <Row>
        {products.map(({ name, link, desc, logo }, i) => (
          <Col md={4} key={i}>
            <Typography
              size={3}
              className="pb-5"
              color="white"
              justify="center"
            >
              <a
                href={link}
                target="_blank"
                className="text-decoration-none text-inherit"
              >
                <img src={logo} width="40%" />
              </a>
            </Typography>
          </Col>
        ))}

        <Col md={12} className="my-5 text-center">
          <Link href="/projects">
            <Button color="light" className="w-25">
              Discover Projects
            </Button>
          </Link>
        </Col>
      </Row>
    </PageSection>
  );
};

export default CurrentWorksSection;
