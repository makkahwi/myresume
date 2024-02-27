import PageSection from "@/components/PageSection";
import {
  Card,
  CardBody,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

const ExperiencesSection = () => {
  const experiences = [
    {
      company: "AlembicSoft",
      description:
        "Executed several Laravel based & PERN based web app private & open-source projects.",
      title: "Full-Stack Developer",
      dates: "Sep 2019 - Present",
      projects: [
        // "Currency_Showroom",
        "Semesteer",
        "Tadreebi",
        // "Zaytouna",
        "R&K_Landing",
        "R&K_App",
      ],
    },
    {
      company: "Logatta",
      website: "https://www.logatta.com/",
      description:
        "Freelance to develop JS based web apps for online Saas services.",
      title: "Senior Frontend Developer",
      // certificate: "/agiletz.pdf",
      dates: "Aug - Dec 2023",
      projects: ["Entreviable", "Crosure"],
    },
    {
      company: "Deloitte Digital",
      website:
        "https://www2.deloitte.com/xe/en/pages/strategy-operations/solutions/deloitte-jordan-digital-center.html",
      description:
        "Full-time job to develop JS based web apps for online public (government) services.",
      title: "Delivery Consultant",
      // certificate: "/agiletz.pdf",
      dates: "Jun - Jul 2023",
      // projects: ["Sanad", "DLS"],
    },
    {
      company: "AgileTz",
      website: "https://www.agiletz.com/",
      description:
        "Full-time job to develop React.Js-Node.Js web apps for online public (government) services.",
      title: "Senior Full-Stack Developer",
      // certificate: "/agiletz.pdf",
      dates: "Aug 2022 - May 2023",
      projects: ["Sanad", "DLS"],
    },
    {
      company: "Digizyn",
      website: "https://digizyn.com/",
      description:
        "Freelance job to develop a React.js-Node.js Based Multi-Front Public (Governmental) Service App.",
      title: "Full-Stack Developer",
      // certificate: "/digizyn.pdf",
      dates: "Jul 2022 - Jul 2022",
      projects: ["DLS"],
    },
    // {
    //   company: "ArabWork",
    //   website: "https://www.linkedin.com/company/arabwork/",
    //   description:
    //     "Full-time job to develop a Vue-Symfony web app for an online service.",
    //   title: "Frontend Developer",
    //   // certificate: "/arabwork.pdf",
    //   dates: "Jun 2022 - Aug 2022",
    //   projects: ["Trellah"],
    // },
    {
      company: "LuxTag",
      website: "https://luxtag.io/",
      description:
        "Full-time job to develop a flagship PERN based web app for an online service.",
      title: "Frontend Developer",
      certificate: "/luxtag.pdf",
      dates: "Nov 2020 - Oct 2021",
      projects: ["BrandTag"],
    },
    {
      company: "AIS School",
      website: "http://aqsa.edu.my/",
      description:
        "Part-time job to develop a Laravel based web app of a student information system.",
      title: "Full-Stack Developer",
      certificate: "/ais.pdf",
      dates: "Sep 2019 - Aug 2020",
      projects: ["AIS_Students", "AIS_Staff"],
    },
    {
      company: "Individually",
      description: "Several code based frontend-only landing-page projects.",
      title: "Frontend Developer",
      dates: "May 2018 - Aug 2019",
      projects: ["Arromi"],
    },
    {
      company: "Individually",
      description: "Several wordpress based website projects.",
      title: "Wordpress Developer",
      dates: "Oct 2015 - Apr 2018",
      projects: [
        "Noor",
        "AAM",
        "xEdu_Landing",
        "OSF",
        "PPAM",
        "AIS_Landing",
        "SpeedWheels",
        "Team_Foundation",
      ],
    },
  ];

  return (
    <PageSection title="Experiences" id="experiences">
      <Col xs={12}>
        <Row className="justify-content-center">
          {experiences.map(
            (
              {
                company,
                website,
                description,
                title,
                certificate,
                dates,
                projects,
              },
              i
            ) => (
              <Col className="mb-5" lg={6} xl={4} key={i}>
                <h4 className="mb-4 text-info">{title}</h4>

                <h6 className="my-4">
                  {dates} @{" "}
                  <a href={website} target="_blank">
                    {company}
                  </a>{" "}
                </h6>

                <p className="text-justify">{description}</p>
              </Col>
            )
          )}
        </Row>
      </Col>
    </PageSection>
  );
};

export default ExperiencesSection;
