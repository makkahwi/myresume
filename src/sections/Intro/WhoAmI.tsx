import PageSection from "@/components/PageSection";
import { capitalizeSentenceFirstLetters } from "@/functions/utils";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { Button, ButtonGroup } from "react-bootstrap";

const EducationSection = () => {
  const education = [
    {
      degree: "6-Month Training Camp",
      description: "Python Based Web Dev (Code Fellows Curriculum)",
      graduated: "Jan - July 2022",
      school: "ASAC of LTUC College (Jordan)",
      logo: "images/LTUC.png",
      link: "https://www.ltuc.com/",
      projects: [
        {
          link: "https://github.com/makkahwi/asac-works",
          title: "Individual works",
          more: "(Several Python & Web Apps)",
        },
        {
          link: "https://silent-speakers.github.io/silent-speakers/",
          title: "Mid-term group project",
          more: "(Desktop Python App)",
        },
        {
          link: "https://tadreebi.netlify.app/",
          title: "Final group project",
          more: "(React-Django Web App)",
        },
      ],
      cert: {
        link: "/LTUC-Certificate.pdf",
        title: "The Certificate",
      },
    },
    {
      degree: "Bachelor of Computer Science",
      description: "Specialized in Data Science and Computational Intelligence",
      graduated: "May 2021",
      school: "International Islamic University Malaysia",
      logo: "images/IIUM.png",
      link: "https://www.iium.edu.my/",
      projects: [
        // {
        //   link: "/Suhaib's-Internship-Final-Report.pdf",
        //   title: "My Internship report",
        //   more: "(a web app)",
        //   download: true,
        // },
        {
          link: "https://github.com/makkahwi/iDecide",
          title: "My FYP project",
          more: "(a web app)",
        },
      ],
      cert: {
        link: "/My-Certificates.pdf",
        title: "My Certificates",
      },
    },
  ];

  return (
    <PageSection title="Education" color="light">
      <Col md={12}>
        {education.map(
          (
            {
              degree,
              description,
              graduated,
              school,
              logo,
              link,
              cert,
              projects,
            },
            i
          ) => (
            <Row className="mb-4" key={i}>
              <Col md={6}>
                <a href={link} target="_blank">
                  <Image src={"/" + logo} width={350} height={350} />
                </a>
              </Col>

              <Col md={6}>
                <h3 className="text-warning">{degree}</h3>
                <h5>{school}</h5>

                <p className="mt-5">{description}</p>

                <Button variant="warning">{cert.title}</Button>

                <div>
                  <ButtonGroup className="mt-3">
                    {projects.map(({ link, title, more }, y) => (
                      <a href={link} target="_blank" key={y}>
                        <Button variant="warning">{title}</Button>
                      </a>
                    ))}
                  </ButtonGroup>
                </div>
              </Col>
            </Row>
          )
        )}
      </Col>
    </PageSection>
  );
};

export default EducationSection;
