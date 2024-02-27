import Image from "next/image";
import { Col, Row } from "react-bootstrap";

const HeaderSection = () => {
  return (
    <Row
      style={{
        minHeight: "100vh",
        backgroundImage: `url('/images/Pattern.png')`,
        backgroundPosition: "center center",
        backgroundRepeat: "repeat",
        // backgroundSize: "cover",
      }}
      className="justify-content-center align-items-center bg-info"
    >
      <Col lg={5} md={6} className="my-auto px-5 text-white">
        <h2 className="mt-4 display-3 fw-bold">Suhaib Ahmad</h2>
        <h4 className="text-light">Senior Full-Stack Developer</h4>
      </Col>

      <Col lg={4} md={6} className="text-center">
        <img
          src="/images/profile.jpg"
          // className="position-absolute bottom-0 mt-5 d-none d-md-block"
          alt="Personal Photo"
          // style={{
          //   left: "50%",
          //   transform: "translate(-50%, 0%)",
          // }}
          width="90%"
        />
      </Col>
    </Row>
  );
};

export default HeaderSection;
