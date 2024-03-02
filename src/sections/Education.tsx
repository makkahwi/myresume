import PageSection from "@/components/PageSection";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";

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
          title: "Mid-term project",
          more: "(Desktop Python App)",
        },
        {
          link: "https://tadreebi.netlify.app/",
          title: "Final project",
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
          title: "FYP project",
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
                  <img alt={school} src={"/" + logo} width="90%" />
                </a>
              </Col>

              <Col md={6}>
                <h3 className="text-info">{degree}</h3>
                <h5>{school}</h5>

                <p className="mt-2">{description}</p>

                <Button variant="info" className="rounded-5">
                  {cert.title}
                </Button>

                <div>
                  <Row className="justify-content-center">
                    {projects.map(({ link, title, more }, y) => (
                      <Col sm={6} md={4} className="my-3" key={y}>
                        <a href={link} target="_blank">
                          <Button variant="info" className="rounded-5 me-2">
                            {title}
                          </Button>
                        </a>
                      </Col>
                    ))}
                  </Row>
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
