import {
  faBriefcase,
  faCode,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardComp from "components/Card";
import PageSection from "components/pageSection";
import Typography from "components/typography";
import Link from "next/link";
import { Fragment } from "react";
import { Button, CardText, Col, Row } from "reactstrap";

export const careers = [
  {
    title: "Web Development",
    desc: "8 years of web developing many solutions, systems and applications on various scales. Almost covered all technical aspects of the process, starting with system features plan & design, and ending up with building the infrastructure and deliver the product. It also covered the soft skills of team leadership, team development planning and so many things. Most notable works are the building of web application of Jordan's public services platform of Sanad, and Jordan's Land and Survey Department digital services portal.",
    icon: faCode,
    jobs: [
      {
        company: "Deloitte Digital",
        website:
          "https://www2.deloitte.com/xe/en/pages/strategy-operations/solutions/deloitte-jordan-digital-center.html",
        description:
          "To develop JS based web apps for online public (government) services.",
        title: "Delivery Consultant",
        type: "Full-Time",
        period: "Jun - Jul 2023",
      },
      {
        company: "AgileTz",
        website: "https://www.agiletz.com/",
        description:
          "To develop React.Js-Node.Js web apps for online public (government) services.",
        title: "Senior Full-Stack Developer",
        type: "Full-Time",
        period: "Aug 2022 - May 2023",
      },
      // {
      //   company: "ArabWork",
      //   website: "https://www.linkedin.com/company/arabwork/",
      //   description:
      //     "Full-time job to develop a Vue-Symfony web app for an online service.",
      //   title: "Frontend Developer",
      //   period: "Jun 2022 - Aug 2022",
      // },
      {
        company: "LuxTag",
        website: "https://luxtag.io/",
        description:
          "To develop a flagship PERN based web app for an online service.",
        title: "Frontend Developer",
        type: "Full-Time",
        period: "Nov 2020 - Oct 2021",
      },
      {
        company: "AIS School",
        website: "http://aqsa.edu.my/",
        description:
          "To develop a Laravel based web app of a student information system.",
        title: "Full-Stack Developer",
        type: "Part-Time",
        period: "Sep 2019 - Aug 2020",
      },
      {
        company: "Individually",
        description:
          "Executed several Laravel based & PERN based web app private & open-source projects.",
        title: "Full-Stack Developer",
        type: "Freelance",
        period: "Sep 2019 - Present",
      },
      {
        company: "Digizyn",
        website: "https://digizyn.com/",
        description:
          "To develop a React.js-Node.js Based Multi-Front Public (Governmental) Service App.",
        title: "Full-Stack Developer",
        type: "Freelance",
        period: "Jul 2022 - Jul 2022",
      },
      {
        company: "Individually",
        description: "Several code based frontend-only landing-page projects.",
        title: "Frontend Developer",
        type: "Freelance",
        period: "May 2018 - Aug 2019",
      },
      {
        company: "Individually",
        description: "Several wordpress based website projects.",
        title: "Wordpress Developer",
        type: "Freelance",
        period: "Oct 2015 - Apr 2018",
      },
    ],
  },
  {
    title: "Graphics & UI Design",
    desc: "3 years as graphic & UI designer to know the basics, learn many tricks and understand how to signify good vs bad designs. Since adopting web development career, designing was a practise on the side to keep the skills and to build designs for projects when needed. Many web application designs were built, beside a lot of graphic designing works like rebuilding foundation brand identities.",
    icon: faPaintBrush,
    jobs: [
      {
        company: "Speed Wheels",
        website: "https://speedwheels.shop/",
        description:
          "Work about designing and preparing for a social-media promotional campaign.",
        title: "Graphic Designer",
        type: "Part-time",
        certificate: "",
        period: "Jan 2017 - Feb 2017",
      },
      {
        company: "QFM Malaysia",
        website: "http://qfmalaysia.org/",
        description: "To design serveral booklets & brochures.",
        title: "Graphic Designer",
        type: "Part-time",
        certificate: "",
        period: "Jun - Aug 2016, May & July 2017, Jun 2018",
      },
      {
        company: "Mercy Mission World",
        website: "https://www.mercymissionworld.org/",
        description: "Work included gaphic designing & events management.",
        title: "PR Executive",
        type: "Part-time",
        certificate: "",
        period: "Dec 2015 - Jun 2016",
      },
      // {
      //   company: "PSA Malaysia",
      //   website: "https://ppam.org.my/",
      //   description:
      //     "Univeristy club work to prepare the publicity materials of digital and print-out designs.",
      //   title: "Media Bureau",
      //   type: "Volunteering",
      //   certificate: "",
      //   period: "Feb 2013 - Jun 2015",
      // },
      {
        company: "Freelance",
        description: "One experience to edit & produce videos for an event.",
        title: "Video Editor",
        type: "Freelance",
        period: "Oct 2019 - Nov 2019",
      },
      {
        company: "Freelance",
        description:
          "Executed enormous number of graphic designs for both print-out & digital uses.",
        title: "Graphic Designer",
        type: "Freelance",
        period: "Feb 2015 - Apr 2019",
      },
    ],
  },
  {
    title: "Managment Works",
    desc: "Had an experience for 3 years in doing management-related jobs of secretary and financial management, which established the skills of work documentation and organization beside the work of foundational cumulative experience build.",
    icon: faBriefcase,
  },
];

const BackgroundSection = ({ page }) => {
  const stats = [
    { title: "ABC", count: 20 },
    { title: "ABC", count: 20 },
    { title: "ABC", count: 20 },
    { title: "ABC", count: 20 },
  ];

  return (
    <PageSection
      title="Professional Journey"
      subtitle="Navigating Careers and Experiences"
      color="secondary"
    >
      <Row className="my-5">
        {stats.map(({ title, count }, i) => (
          <Col md={3} className="my-3 text-white" key={i}>
            <Typography justify="center" size={1}>
              {count}
            </Typography>
            <Typography justify="center" size={4}>
              {title}
            </Typography>
          </Col>
        ))}
      </Row>

      <Row>
        {careers.map(({ title, desc, icon }, i) => (
          <Col md={4} key={i}>
            <CardComp
              title={
                <Fragment>
                  <Typography
                    size={1}
                    justify="center"
                    // color="warning"
                    style={{ fontSize: "5vw" }}
                    className="my-5"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </Typography>

                  <Typography size={3} justify="center">
                    {title}
                  </Typography>
                </Fragment>
              }
            >
              {page && (
                <CardText>
                  <Typography size={6} className="lh-lg">
                    {desc}
                  </Typography>
                </CardText>
              )}
            </CardComp>
          </Col>
        ))}

        {!page && (
          <Col md={12} className="my-5 text-center">
            <Link href="/career">
              <Button color="light" className="w-25">
                Explore My Career
              </Button>
            </Link>
          </Col>
        )}
      </Row>
    </PageSection>
  );
};

export default BackgroundSection;
