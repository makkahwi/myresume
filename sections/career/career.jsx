import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardComp from "components/Card";
import CarouselComp from "components/carousel";
import PageSection from "components/pageSection";
import Typography from "components/typography";
import { Col, Row } from "reactstrap";
import { careers } from "sections/home/background";

const CareerSection = () => {
  const JobBox = ({ company, website, description, title, type, period }) => (
    <CardComp color="warning">
      <Typography size={6} color="dark">
        {period + " @ "}
        <a
          href={website}
          target="_blank"
          className="text-decoration-none text-inherit"
        >
          {company}
        </a>
      </Typography>

      <Typography size={5} color="dark">
        {title}
      </Typography>

      <Typography size={6} color="dark">
        {type + " " + description}
      </Typography>
    </CardComp>
  );

  const CareerSlide = ({ title, desc, icon, jobs }) => (
    <CardComp color="warning">
      <Typography size={3} justify="center" color="warning">
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
    </CardComp>
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
