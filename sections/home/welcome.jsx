import CarouselComp from "components/carousel";
import PageSection from "components/pageSection";
import Typography from "components/typography";
import { Col, Row } from "reactstrap";

const WelcomeSection = () => {
  const SlideComp = ({ text }) => <Typography size={3}>{text}</Typography>;

  const texts = [
    "Founder of Semesteer, Entrepreneur, Innovator & Web Developer",
    "Innovating & Shaping Education Digital Solutions",
    "Entrepreneuring to Overcome Educational Challenges",
    "Entrepreneuring to Revolutionize Education Sector",
    "Investing Rechnology Passion & Experience Into Education Solutions",
  ];

  return (
    <PageSection color="dark">
      <Row style={{ minHeight: "70vh" }} className="text-white">
        <Col lg={6} style={{ margin: "auto 0" }} className="py-5">
          <Typography size={1} className="pb-4" style={{ fontSize: "3.5vw" }}>
            Suhaib Ahmad
          </Typography>

          <CarouselComp
            items={texts.map((text, i) => (
              <SlideComp text={text} key={i} />
            ))}
          />
        </Col>

        <Col lg={6} style={{ margin: "auto 0" }} className="text-center">
          <img src="/images/profile.jpg" width="70%" />
        </Col>
      </Row>
    </PageSection>
  );
};

export default WelcomeSection;
