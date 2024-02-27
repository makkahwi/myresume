"use client";

import Image from "next/image";
import { Col } from "react-bootstrap";
import CountUp from "react-countup";

const NumberCounters = () => {
  const stats = [
    { title: "Projects Built", count: 52 },
    { title: "Organizations Served", count: 30 },
    { title: "Experience Years", count: 10 },
  ];

  return stats.map(({ title, count }, i) => (
    <Col xs={12} md={3} className="my-auto text-center my-5" key={i}>
      <h1
        className="text-white rounded-circle bg-info p-3 mx-auto"
        style={{ width: "max-content" }}
      >
        {count}
      </h1>
      <h5 className="mt-2 text-dark">{title}</h5>
    </Col>
  ));
};

export default NumberCounters;
