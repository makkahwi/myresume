import CarouselComp from "components/carousel";
import PageSection from "components/pageSection";
import Typography from "components/typography";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
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

  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <PageSection>
      <Row style={{ minHeight: "70vh" }}>
        <Col lg={6} style={{ margin: "auto 0" }} className="py-5">
          <Typography size={1} justify="center" className="pb-5">
            Suhaib Ahmad
          </Typography>

          <CarouselComp
            items={texts.map((text, i) => (
              <SlideComp text={text} key={i} />
            ))}
          />
        </Col>

        <Col lg={6} style={{ margin: "auto 0" }}>
          {showVideo ? (
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              light="/images/profile.jpg"
              width="100%"
            />
          ) : (
            <img src="/images/profile.jpg" width="100%" />
          )}
        </Col>
      </Row>
    </PageSection>
  );
};

export default WelcomeSection;
