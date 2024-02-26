"use client";

import Image from "next/image";
import { Col } from "react-bootstrap";
import CountUp from "react-countup";

const NumberCounters = () => {
  const stats = [
    { title: "Projects Built", count: 52 },
    { title: "Organizations Served", count: 30 },
    { title: "Experience Years", count: 8 },
  ];

  return stats.map(({ title, count }, i) => (
    <Col xs={12} md={3} className="my-auto text-center my-5" key={i}>
      <Image
        src="/images/logo/sun.png"
        className="my-2"
        alt="Sun"
        width={409 * 0.25}
        height={244 * 0.25}
        priority
      />
      <h1 className="text-danger">
        <CountUp start={0} end={count} duration={3} enableScrollSpy />
      </h1>
      <h5 className="mt-2 text-dark">{title}</h5>
    </Col>
  ));
};

export default NumberCounters;
