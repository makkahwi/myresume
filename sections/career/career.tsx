import CardComp from "@/components/Card";
import CarouselComp from "@/components/carousel";
import PageSection from "@/components/pageSection";
import Typography from "@/components/typography";
import { careers } from "@/sections/home/background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";

const CareerSection = () => {
  const JobBox = ({
    company = "",
    website = "",
    description = "",
    title = "",
    type = "",
    period = "",
  }) => (
    <CardComp color="info">
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

  const CareerSlide = ({
    title,
    desc,
    icon,
    jobs,
  }: {
    title: string;
    desc: string[];
    icon: any;
    jobs: {}[];
  }) => (
    <CardComp color="info">
      <Typography size={3} justify="center" color="info" className="mt-5">
        <FontAwesomeIcon icon={icon} /> {title}
        <div className="m-5">
          <Row>
            {jobs?.map((job, i) => (
              <Col md={4} className="p-2 d-flex" key={i}>
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
        controls
        indicators
        items={careers.map((career, i) => (
          <CareerSlide {...career} key={i} />
        ))}
        dark
      />
    </PageSection>
  );
};

export default CareerSection;
