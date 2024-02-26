import PageSection from "@/components/PageSection";
import { Col } from "react-bootstrap";

const TrustedBySection = () => {
  const partners = [
    { logo: "orange.png", link: "https://orange.jo" },
    { logo: "cranfield.png", link: "https://www.cranfield.ac.uk/" },
    { logo: "efe.png", link: "https://efejordan.org/" },
    { logo: "merck.png", link: "https://www.merckgroup.com" },
    { logo: "joddb.png", link: "https://www.joddb.com/" },
    { logo: "real.jpg", link: "https://realcosmetics.jo/" },
    { logo: "johnson.png", link: "https://www.jnj.com/", bigger: true },
    { logo: "giz.png", link: "https://www.giz.de/en", bigger: true },
    { logo: "gp.png", link: "https://www.gpstrategies.com/", bigger: true },
    { logo: "kempinski.png", link: "https://www.kempinski.com/", bigger: true },
    { logo: "pfizer.png", link: "https://www.pfizer.com/", bigger: true },
    {
      logo: "tabuk.png",
      link: "https://www.tabukpharmaceuticals.com/",
      bigger: true,
    },
    { logo: "usaid.png", link: "https://www.usaid.gov/jordan", bigger: true },
    { logo: "ccl.png", link: "https://www.ccl.org/", bigger: true },
    {
      logo: "aqai.png",
      link: "https://www.aqai.io/",
      bigger: true,
    },
    {
      logo: "correlation.png",
      link: "https://www.correlation-one.com/",
      bigger: true,
    },
    {
      logo: "qrce.png",
      link: "https://www.qrce.org/",
      bigger: true,
    },
    {
      logo: "zain.png",
      link: "https://www.jo.zain.com",
      bigger: true,
    },
  ];

  return (
    <PageSection title="Trusted By" noMinHeight color="light">
      {partners.map(({ logo, link, bigger }, i) => (
        <Col
          xs={6}
          md={3}
          lg={4}
          xl={bigger ? 3 : 2}
          className="p-3 p-lg-5"
          key={i}
        >
          <a href={link} target="_blank">
            <img src={`/images/partners/${logo}`} width="100%" />
          </a>
        </Col>
      ))}
    </PageSection>
  );
};

export default TrustedBySection;
