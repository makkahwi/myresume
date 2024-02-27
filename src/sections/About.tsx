import PageSection from "@/components/PageSection";
import { Col, Row } from "react-bootstrap";

const AboutSection = () => {
  const stats = [
    { title: "Projects Built", count: 52 },
    { title: "Organizations Served", count: 30 },
    { title: "Experience Years", count: 10 },
  ];

  return (
    <PageSection id="about">
      {/* <Col lg={6} className="my-auto">
        <iframe
          src="https://www.youtube.com/embed/JxHy8wEhrEg"
          width="100%"
          style={{ minHeight: 33 / 1.778 + "vw" }}
        />
      </Col> */}

      <Col lg={12} className="my-auto">
        <h5 className="text-block text-dark">
          An individual with a constant passion & burning desire to keep
          exploring, learning & giving a try to things, which makes me a fit for
          the IT sector. I&apos;m highly organized, detail-oriented and
          timing-particular, and I believe that also what makes me a good
          programmer. You may scroll down to see it for yourself, and you may
          also download my...
        </h5>
      </Col>

      <Col lg={12} className="mt-5">
        <Row className="justify-content-between py-auto px-5">
          {stats.map(({ title, count }, i) => (
            <Col xs={12} md={3} className="my-auto text-center my-5" key={i}>
              <h1
                className="text-white rounded-circle bg-info p-3 mx-auto"
                style={{ width: "max-content" }}
              >
                {count}
              </h1>
              <h5 className="mt-2 text-dark">{title}</h5>
            </Col>
          ))}
        </Row>
      </Col>
    </PageSection>
  );
};

export default AboutSection;
