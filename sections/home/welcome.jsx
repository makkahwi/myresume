import CarouselComp from "components/carousel";
import PageSection from "components/pageSection";
import Typography from "components/typography";
import { Col, Row } from "reactstrap";

const WelcomeSection = () => {
  const SlideComp = ({ text }) => (
    <Typography size={5} justify="center">
      {text}
    </Typography>
  );

  const texts = [
    "Founder & CEO of Semesteer, Entrepreneur, Innovator & Web Developer",
    "Innovating & Shaping Education Digital Solutions",
    "Entrepreneuring to Overcome Educational Challenges",
    "Entrepreneuring to Revolutionize Education Sector",
    "Investing Rechnology Passion & Experience Into Education Solutions",
  ];

  return (
    <PageSection>
      <Row>
        <Col md={6}>
          <Typography size={2} justify="center" className="pb-5">
            Suhaib Ahmad
          </Typography>

          <CarouselComp
            items={texts.map((text, i) => (
              <SlideComp text={text} key={i} />
            ))}
          />
        </Col>

        <Col md={6}>
          <img src="/images/profile.jpg" width="100%" />
        </Col>
      </Row>
    </PageSection>
  );
};

export default WelcomeSection;
