import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarouselComp from "components/carousel";
import PageSection from "components/pageSection";
import Typography from "components/typography";
import { Card, CardBody, Col, Row } from "reactstrap";
import { careers } from "sections/home/background";

const CareerSection = () => {
  const JobBox = ({ company, website, description, title, type, period }) => (
    <Card className="bg-transparent border-warning border-5">
      <CardBody className="my-4 p-3">
        <Typography size={6}>
          {period + " @ "}
          <a
            href={website}
            target="_blank"
            className="text-decoration-none text-inherit"
          >
            {company}
          </a>
        </Typography>

        <Typography size={5}>{title}</Typography>

        <Typography size={6}>{type + " " + description}</Typography>
      </CardBody>
    </Card>
  );

  const CareerSlide = ({ title, desc, icon, jobs }) => (
    <Card className="bg-transparent border-warning border-5">
      <CardBody className="my-4">
        <Typography size={3} justify="center">
          <FontAwesomeIcon icon={icon} /> {title}
          <div className="m-5">
            <Row>
              {jobs?.map((job, i) => (
                <Col md={4} className="p-2" key={i}>
                  <JobBox {...job} />
                </Col>
              ))}
            </Row>
          </div>
        </Typography>
      </CardBody>
    </Card>
  );

  return (
    <PageSection title="Careers" subtitle="Navigating Careers and Experiences">
      <CarouselComp
        items={careers.map((career, i) => (
          <CareerSlide {...career} key={i} />
        ))}
        controls
        indicators
      />
    </PageSection>
  );
};

export default CareerSection;
