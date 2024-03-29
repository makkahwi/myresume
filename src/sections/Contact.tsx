import PageSection from "@/components/PageSection";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row } from "react-bootstrap";

import ContactForm from "./ContactForm";

export const socialLinksList = [
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/makkahwi/",
    label: "Connect and Empower",
    color: "#0A66C2",
    common: true,
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    link: "https://wasap.my/962788424973",
    label: "Text Me Anytime",
    color: "#1fb355",
    common: true,
  },
  {
    name: "Phone",
    icon: faPhone,
    link: "tel:+962788424973",
    label: "Call If Needed",
    color: "#1e4c9d",
    common: true,
  },
  {
    name: "Email",
    icon: faEnvelope,
    link: "mailto:SuhaibAhmadAi@hotmail.com",
    label: "Inbox Awaits You",
    color: "#17A2B8",
    common: true,
  },
  {
    name: "Facebook",
    icon: faFacebook,
    link: "https://facebook.com/makakahwi",
    label: "Let&apos;s Chat Forever",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/makakahwi/",
    label: "Capture Life Together",
    color: "#E4405F",
  },
];

const ContactSection = () => {
  return (
    <PageSection title="Contact Me" id="contact">
      <Col md={12} className="text-center p-0 m-0">
        <h5 className="text-dark">{"We can have a discovery session now"}</h5>
      </Col>

      <Col md={12} className="text-center p-0 m-0 my-5">
        <Row>
          {socialLinksList
            .filter(({ common }) => common)
            .map(({ name, icon, link, label, color }, i) => (
              <Col xs={6} md={4} lg={3} key={i}>
                <a href={link} target="_blank">
                  <Button
                    style={{ backgroundColor: color }}
                    className="p-3 my-2 w-100 rounded-5"
                    variant="transparent"
                  >
                    <h6 className="text-center text-white p-0 m-0">
                      <FontAwesomeIcon icon={icon} /> {label}
                    </h6>
                  </Button>
                </a>
              </Col>
            ))}
        </Row>
      </Col>

      <Col md={12} className="p-0 m-0">
        <ContactForm />
      </Col>
    </PageSection>
  );
};

export default ContactSection;
