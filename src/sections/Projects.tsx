import PageSection from "@/components/PageSection";
import { Card, CardBody, Col, Row } from "react-bootstrap";

const ProjectsSection = () => {
  const projects = [
    {
      category: "Landing Pages",
      description: "Frontend Dev of Next.Js Based Landing Page",
      comingSoon: false,
      image: `/images/projects/25.jpg`,
      title: "Mr. Noor Kayyali",
      link: "noor",
      url: "https://noorkayyali.com",
    },
    {
      category: "Web Apps",
      description: "System architect of Open-Source SaaS App",
      comingSoon: true,
      openSource: true,
      image: `/images/projects/24.jpg`,
      title: "AppNest",
      link: "AppNest",
      // url: "https://AppNest.dev/",
    },
    {
      category: "Web Apps",
      description: "Frontend Dev of React.js Based SaaS App",
      company: "Logatta",
      comingSoon: true,
      image: `/images/projects/22.jpg`,
      title: "Crosure",
      link: "Crosure",
      url: "https://crosure.com/",
    },
    {
      category: "Web Apps",
      description: "Frontend Dev of React.js Based SaaS App",
      company: "Logatta",
      comingSoon: true,
      image: `/images/projects/21.jpg`,
      title: "Entreviable",
      link: "Entreviable",
      url: "https://entreviable.com",
    },
    {
      category: "Web Apps",
      description:
        "Frontend Dev of React.js Based Public (Governmental) Service App",
      company: "AgileTz",
      comingSoon: true,
      image: `/images/projects/20.jpg`,
      title: "Sanad",
      link: "Sanad",
      // url: "https://sanadfront.agiletz.com/",
    },
    {
      category: "Web Apps",
      description:
        "Full-Stack Dev of React.js-Node.js Based Multi-Front Public (Governmental) Service App",
      company: "AgileTz",
      image: `/images/projects/14.jpg`,
      title: "DLS",
      link: "DLS",
      url: "https://portal.dls.gov.jo/",
    },
    {
      category: "Web Apps",
      description: "Full-Stack Dev of React.Js-Laravel Based App",
      comingSoon: false,
      image: `/images/projects/19.jpg`,
      title: "Semesteer",
      link: "semesteer",
      url: "https://semesteer.com/",
    },
    {
      category: "Web Apps",
      description: "Frontend Dev of Vue.js Based App",
      company: "Trellah",
      image: `/images/projects/16.jpg`,
      title: "Trellah",
      link: "trellah",
      url: "https://trellah.com/",
    },
    {
      category: "Web Apps",
      description: "Full-Stack Dev of React.Js-Node.Js Based App",
      comingSoon: true,
      image: `/images/projects/23.jpg`,
      title: "Rasmi & Kiwan",
      link: "R&K_App",
      // "url": "https://rasmiandkiwan.com/"
    },
    {
      category: "Landing Pages",
      description: "Frontend Dev of Next.Js-Node.Js Based App",
      comingSoon: false,
      image: `/images/projects/17.jpg`,
      title: "Rasmi & Kiwan",
      link: "R&K_Landing",
      url: "https://rasmiandkiwan.com/",
    },
    {
      category: "Web Apps",
      description: "Frontend Dev of PERN Based App",
      company: "Luxtag",
      image: `/images/projects/11.jpg`,
      title: "BrandTag",
      link: "brandtag",
      url: "https://app.brandtag.io/",
    },
    {
      category: "Landing Pages",
      description: "Frontend Dev of Next.Js Based Landing Page",
      comingSoon: false,
      image: `/images/projects/12.jpg`,
      title: "Dr. Ahmad Abu Mahfouth",
      link: "aam",
      url: "https://drahmadabumahfouth.com",
    },
    {
      category: "Web Apps",
      description: "Full-Stack Dev of Vue.js-Django Based App",
      comingSoon: true,
      openSource: true,
      image: `/images/projects/7.jpg`,
      title: "Currency Showroom",
      link: "currency_showroom",
      url: "https://currencies-showroom.vercel.app/",
    },
    // {
    //   category: "Landing Pages",
    //   description: "Wordpress Website",
    //   image: `/images/projects/1.jpg`,
    //   title: "OneShot Future Company",
    //   link: "osf",
    //   url: "https://oneshotfuture.com/",
    // },
    {
      category: "Web Apps",
      description: "Full-Stack Dev of Laravel Based App",
      image: `/images/projects/8.jpg`,
      title: "AIS Students Portal",
      link: "ais_students",
      url: "https://students.aqsa.edu.my/",
    },
    // {
    //   category: "Landing Pages",
    //   description: "React.Js Based App",
    //   comingSoon: true,
    //   openSource: true,
    //   image: `/images/projects/18.jpg`,
    //   title: "Zaytouna Club",
    //   link: "Zaytouna",
    //   url: "https://zaytouna-tau.vercel.app/",
    // },
    {
      category: "Web Apps",
      description: "Full-Stack Dev of React.Js-Express.Js",
      image: `/images/projects/15.jpg`,
      title: "AIS Staff Portal",
      link: "ais_students",
      url: "https://staff.aqsa.edu.my/",
    },
    // {
    //   category: "Landing Pages",
    //   description: "Wordpress Website",
    //   comingSoon: true,
    //   image: `/images/projects/9.jpg`,
    //   title: "xEdu Landing Page",
    //   link: "xedu_landing",
    //   url: "https://xEdu.best/",
    // },
    // {
    //   category: "Web Apps",
    //   description: "Full-Stack Dev of PERN Based App",
    //   comingSoon: true,
    //   image: `/images/projects/10.jpg`,
    //   title: "xEdu App",
    //   link: "xedu",
    //   url: "https://xEdu.best/",
    // },
    // {
    //   category: "Landing Pages",
    //   description: "Wordpress Website",
    //   image: `/images/projects/6.jpg`,
    //   title: "PPAM Organization",
    //   link: "ppam",
    //   url: "https://ppam.org.my/",
    // },
    // {
    //   category: "Web Apps",
    //   description: "Full-Stack Dev of React.Js-Node.Js Based App",
    //   comingSoon: true,
    //   image: `/images/projects/10.jpg`,
    //   title: "Dr. Ahmad Abu Mahfouth Clinic Mgmt System",
    //   link: "R&K_App",
    //   // "url": "https://rasmiandkiwan.com/"
    // },
    {
      category: "Landing Pages",
      description: "Wordpress Website",
      image: `/images/projects/2.jpg`,
      title: "AIS School",
      link: "ais_landing",
      url: "https://aqsa.edu.my/",
    },
    {
      category: "Web Apps",
      description: "Full-Stack Dev of React-Django Based (Coollebraive)",
      openSource: true,
      image: `/images/projects/13.jpg`,
      title: "Tadreebi",
      link: "tadreebi",
      url: "https://tadreebi.netlify.app/",
    },
    // {
    //   category: "Landing Pages",
    //   description: "Wordpress Website",
    //   image: `/images/projects/4.jpg`,
    //   title: "SpeedWheels Company",
    //   link: "speedwheels",
    //   url: "https://speedwheelstrade.online/",
    // },
    // {
    //   category: "Landing Pages",
    //   description: "Wordpress Website",
    //   image: `/images/projects/3.jpg`,
    //   title: "Team Foundation",
    //   link: "team_foundation",
    //   url: "https://teamtr.media/",
    // },
  ];

  return (
    <PageSection title="Projects" color="secondary" id="projects">
      <Col xs={12}>
        <Row>
          {projects.map(
            (
              { category, description, openSource, image, title, link, url },
              i
            ) => (
              <Col sm={6} md={3} className="mb-4" key={i}>
                <a href={url} target="_blank">
                  <Card role="button" className="h-100">
                    <img src={image} width="100%" />

                    <CardBody>
                      <h5>{title}</h5>
                      <p>{description}</p>
                    </CardBody>
                  </Card>
                </a>
              </Col>
            )
          )}
        </Row>
      </Col>
    </PageSection>
  );
};

export default ProjectsSection;
