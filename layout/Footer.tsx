import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "@/components/typography";
import { Button, ButtonToolbar, Navbar, NavbarText } from "react-bootstrap";
import { socialLinksList } from "@/consts/data";

const Footer = () => {
  return (
    <Navbar className="py-4 px-4 my-0" bg="secondary">
      <NavbarText className="text-center w-100">
        <img src="/images/logo.png" width="100vw" className="my-5" />

        <Typography color="white" justify="center">
          All Rights Reserved For <b>Suhaib Ahmad</b> © 2018 -{" "}
          {new Date().getFullYear()}
        </Typography>

        <ButtonToolbar className="justify-content-center my-3">
          {socialLinksList.map(({ icon, link }, i) => (
            <a href={link} target="_blank" key={i}>
              <Button variant="ghost" className="text-white ms-2" size="sm">
                <FontAwesomeIcon icon={icon} />
              </Button>
            </a>
          ))}
        </ButtonToolbar>
      </NavbarText>
    </Navbar>
  );
};

export default Footer;
