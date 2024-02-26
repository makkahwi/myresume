import Image from "next/image";
import { Col, Row } from "react-bootstrap";

const HeaderSection = () => {
  return (
    <Row
      style={{
        minHeight: "100vh",
        backgroundImage: `url('/images/Pattern.png')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="justify-content-center bg-warning"
    >
      <Col lg={5} md={6} className="my-auto px-5 text-white">
        <h2 className="mt-4 display-3 fw-bold">Suhaib Ahmad</h2>
        <h4 className="text-light fst-italic">Senior Full-Stack Developer</h4>
      </Col>

      <Col lg={4} md={6} className="position-relative mt-5">
        <Image
          src="/images/05.png"
          className="position-absolute bottom-0 mx-5 mt-5 d-block d-md-none"
          alt="Personal Photo"
          style={{
            left: "50%",
            transform: "translate(-50%, 0%)",
          }}
          width={646 * 0.45}
          height={934 * 0.45}
          priority
        />

        <Image
          src="/images/05.png"
          className="position-absolute bottom-0 mt-5 d-none d-md-block"
          alt="Personal Photo"
          style={{
            left: "50%",
            transform: "translate(-50%, 0%)",
          }}
          width={646 * 0.65}
          height={934 * 0.65}
          priority
        />
      </Col>
    </Row>
  );
};

export default HeaderSection;
