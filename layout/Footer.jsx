import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "components/typography";
import { socialLinksList } from "pages/_document";
import { Button, ButtonToolbar, Navbar, NavbarText } from "reactstrap";

const Footer = () => {
  return (
    <Navbar className="py-4 px-4" color="secondary" dark>
      <NavbarText className="text-center w-100">
        <img src="/images/logo.png" width="100vw" className="my-5" />

        <Typography color="white" justify="center">
          All Rights Reserved For <b>Suhaib Ahmad</b> ©{" "}
          {new Date().getFullYear()}
        </Typography>

        <ButtonToolbar className="justify-content-center my-3">
          {socialLinksList.map(({ icon, link }, i) => (
            <a href={link} target="_blank" key={i}>
              <Button
                color="ghost"
                outline
                className="text-white ms-2"
                size="sm"
              >
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
