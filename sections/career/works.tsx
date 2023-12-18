import CardComp from "@/components/Card";
import PageSection from "@/components/pageSection";
import Typography from "@/components/typography";
import { Col, Row } from "react-bootstrap";

const WorksSection = () => {
  const works = [
    {
      category: "Web Apps",
      description: "Frontend Dev of React.js Based Search-Engine App",
      comingSoon: true,
      image: `/10.jpg`,
      title: "Commsure",
      url: "https://commsure.com/",
    },
    {
      category: "Web Apps",
      description: "Frontend Dev of React.js Based SaaS App",
      comingSoon: true,
      image: `/10.jpg`,
      title: "Entreviable",
      // url: "https://entreviable.com",
    },
    {
      category: "Web Apps",
      description:
        "Frontend Dev of React.js Based Public (Governmental) Service App",
      company: "AgileTz",
      comingSoon: true,
      image: `/20.jpg`,
      title: "Sanad",
      // url: "https://sanadfront.agiletz.com/",
    },
    {
      category: "Web Apps",
      description:
        "Full-Stack Dev of React.js-Node.js Based Multi-Front Public (Governmental) Service App",
      company: "AgileTz",
      image: `/14.jpg`,
      title: "DLS",
      url: "https://portal.dls.gov.jo/",
    },
    {
      category: "Web Apps",
      description: "Full-Stack Dev of React.Js-Laravel Based App",
      comingSoon: true,
      image: `/10.jpg`,
      title: "Semesteer",
      url: "https://semesteer.com/",
    },
    {
      category: "Web Apps",
      description: "Frontend Dev of Vue.js Based App",
      company: "Trellah",
      image: `/16.jpg`,
      title: "Trellah",
      url: "https://trellah.com/",
    },
    {
      category: "Web Apps",
      description: "Full-Stack Dev of React.Js-Node.Js Based App",
      comingSoon: true,
      image: `/10.jpg`,
      title: "Rasmi & Kiwan",
      // "url": "https://rasmiandkiwan.com/"
    },
    {
      category: "Landing Pages",
      description: "Frontend Dev of Next.Js-Node.Js Based App",
      comingSoon: false,
      image: `/17.jpg`,
      title: "Rasmi & Kiwan",
      url: "https://rasmiandkiwan.com/",
    },
    {
      category: "Web Apps",
      description: "Frontend Dev of PERN Based App",
      company: "Luxtag",
      image: `/11.jpg`,
      title: "BrandTag",
      url: "https://app.brandtag.io/",
    },
    {
      category: "Landing Pages",
      description: "Frontend Dev of Next.Js Based Landing Page",
      comingSoon: false,
      image: `/12.jpg`,
      title: "Dr. Ahmad Abu Mahfouth",
      url: "https://drahmadabumahfouth.com",
    },
    {
      category: "Web Apps",
      description: "Full-Stack Dev of Vue.js-Django Based App",
      comingSoon: true,
      openSource: true,
      image: `/7.jpg`,
      title: "Currency Showroom",
      url: "https://currencies-showroom.vercel.app/",
    },
    {
      category: "Landing Pages",
      description: "Wordpress Website",
      image: `/1.jpg`,
      title: "OneShot Future Company",
      url: "https://oneshotfuture.com/",
    },
    {
      category: "Web Apps",
      description: "Full-Stack Dev of Laravel Based App",
      image: `/8.jpg`,
      title: "AIS Students Portal",
      url: "https://students.aqsa.edu.my/",
    },
    // {
    //   category: "Landing Pages",
    //   description: "React.Js Based App",
    //   comingSoon: true,
    //   openSource: true,
    //   image: `/18.jpg`,
    //   title: "Zaytouna Club",
    //   url: "https://zaytouna-tau.vercel.app/",
    // },
    {
      category: "Web Apps",
      description: "Full-Stack Dev of React.Js-Express.Js",
      image: `/15.jpg`,
      title: "AIS Staff Portal",
      url: "https://staff.aqsa.edu.my/",
    },
    // {
    //   category: "Landing Pages",
    //   description: "Wordpress Website",
    //   comingSoon: true,
    //   image: `/9.jpg`,
    //   title: "xEdu Landing Page",
    //   url: "https://xEdu.best/",
    // },
    // {
    //   category: "Web Apps",
    //   description: "Full-Stack Dev of PERN Based App",
    //   comingSoon: true,
    //   image: `/10.jpg`,
    //   title: "xEdu App",
    //   url: "https://xEdu.best/",
    // },
    // {
    //   category: "Landing Pages",
    //   description: "Wordpress Website",
    //   image: `/6.jpg`,
    //   title: "PPAM Organization",
    //   url: "https://ppam.org.my/",
    // },
    // {
    //   category: "Web Apps",
    //   description: "Full-Stack Dev of React.Js-Node.Js Based App",
    //   comingSoon: true,
    //   image: `/10.jpg`,
    //   title: "Dr. Ahmad Abu Mahfouth Clinic Mgmt System",
    //   // "url": "https://rasmiandkiwan.com/"
    // },
    {
      category: "Landing Pages",
      description: "Wordpress Website",
      image: `/2.jpg`,
      title: "AIS School",
      url: "https://aqsa.edu.my/",
    },
    {
      category: "Web Apps",
      description: "Full-Stack Dev of React-Django Based (Coollebraive)",
      openSource: true,
      image: `/13.jpg`,
      title: "Tadreebi",
      url: "https://tadreebi.netlify.app/",
    },
    // {
    //   category: "Landing Pages",
    //   description: "Wordpress Website",
    //   image: `/4.jpg`,
    //   title: "SpeedWheels Company",
    //   url: "https://speedwheelstrade.online/",
    // },
    {
      category: "Landing Pages",
      description: "Wordpress Website",
      image: `/3.jpg`,
      title: "Team Foundation",
      url: "https://teamtr.media/",
    },
    {
      category: "Logos",
      description: "Logo Design",
      image: `/Logos/2.jpg`,
      title: "Finger Speak",
      url: `https://silent-speakers.github.io/silent-speakers/#overview`,
    },
    {
      category: "Business Cards",
      description: "Business Card Design",
      image: `/BusinessCards/3.jpg`,
      title: "AIS School",
      url: `/BusinessCards/3.jpg`,
    },
    {
      category: "Logos",
      description: "Logo Design",
      image: `/Logos/3.png`,
      title: "Al-Aqsa Staff Portal",
      url: `http://staff.aqsa.edu.my/`,
    },
    {
      category: "Booklets",
      description: "Booklet Design",
      image: `/Booklets/5.jpg`,
      title: "PSAD Southeast Asia",
      url: `/Booklets/5.pdf`,
    },
    {
      category: "Logos",
      description: "Logo Design",
      image: `/Logos/5.png`,
      title: "Dr. Ahmad Abu Mahfouth Clinic",
      link: "aam_app",
      url: `https://aam.arromi.net/`,
    },
    {
      category: "Booklets",
      description: "Booklet Design",
      image: `/Booklets/2.jpg`,
      title: "Mercy Mission World",
      url: `/Booklets/2.pdf`,
    },
    // {
    //   category: "Logos",
    //   description: "Logo Design",
    //   image: `/Logos/6.png`,
    //   title: "xEdu",
    //   url: "https://xEdu.best/",
    // },
    {
      category: "Banners & Posters",
      description: "Banner Design",
      image: `/Banners/2.jpg`,
      title: "Several University Clubs",
      url: `/Banners/2.jpg`,
    },
    {
      category: "Logos",
      description: "Logo Design",
      image: `/Logos/4.jpg`,
      title: "Univeristy Club",
      url: `/Logos/4.jpg`,
    },
    {
      category: "Banners & Posters",
      description: "Banner Design",
      image: `/Banners/1.jpg`,
      title: "SpeedWheels",
      url: `/Banners/1.jpg`,
    },
    {
      category: "Logos",
      description: "Logo Re-design",
      image: `/Logos/1.jpg`,
      title: "QFM Malaysia",
      url: `http://qfmalaysia.org/`,
    },
    {
      category: "Booklets",
      description: "Booklet Design",
      image: `/Booklets/4.jpg`,
      title: "QFM Malaysia",
      url: `/Booklets/4.pdf`,
    },
    {
      category: "Banners & Posters",
      description: "Poster Design",
      image: `/Others/2.jpg`,
      title: "FYP Project",
      url: `/Others/2.jpg`,
    },
    {
      category: "Others",
      description: "CV Design",
      image: `/Others/3.jpg`,
      title: "An Engineering Graduate",
      url: `/Others/3.jpg`,
    },
    {
      category: "Banners & Posters",
      description: "Brochure Design",
      image: `/posters/1.jpg`,
      title: "Makan Sini Resturant",
      url: `/posters/1.jpg`,
    },
    {
      category: "Business Cards",
      description: "Business Card Design",
      image: `/BusinessCards/4.jpg`,
      title: "Global Mediator",
      url: `/BusinessCards/4.jpg`,
    },
    {
      category: "Booklets",
      description: "Booklet Design",
      image: `/Booklets/6.jpg`,
      title: "IIUM",
      url: `/Booklets/6.pdf`,
    },
    {
      category: "Others",
      description: "Brochure Design",
      image: `/posters/2.jpg`,
      title: "IIUM",
      url: `/posters/2.jpg`,
    },
    {
      category: "Videos",
      description: "Video Producing",
      image: `/Videos/1.png`,
      title: "ICPC Asia Regional Contest",
      url: "https://www.youtube.com/watch?v=nwjGLer53sQ",
    },
    {
      category: "Videos",
      description: "Video Producing",
      image: `/Videos/2.png`,
      title: "ICPC Asia Regional Contest",
      url: "https://www.youtube.com/watch?v=D1uIlE_YB3U",
    },
  ];

  return (
    <PageSection
      title="Works"
      subtitle="Most Significant Projects"
      color="info"
    >
      <Row>
        {works?.map(({ image, title, description, category }, i) => (
          <Col xl={2} lg={3} md={4} sm={6} className="p-2 d-flex" key={i}>
            <CardComp image={`/images/portfolio/${image}`}>
              <Typography size={4} justify="center" color="white">
                {title}
              </Typography>

              {/* <Typography size={6} className="my-3" color="white">
                  {category}
                </Typography> */}

              {/* <Typography size={6} className="my-3" color="white">
                  {roles}
                </Typography> */}

              <Typography size={6} className="my-3" color="white">
                {description}
              </Typography>

              {/* <Typography size={6} className="my-3" color="white">
                  {org}
                </Typography> */}
            </CardComp>
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

export default WorksSection;
