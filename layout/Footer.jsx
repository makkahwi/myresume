import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "components/typography";
import { socialLinksList } from "pages/_document";
import { Button, ButtonToolbar, Navbar, NavbarText } from "reactstrap";

const Footer = () => {
  return (
    <Navbar className="py-4 px-4" color="secondary" dark>
      <NavbarText>
        <Typography color="white">
          All Rights Reserved For Suhaib Ahmad © {new Date().getFullYear()}
        </Typography>
      </NavbarText>

      <ButtonToolbar>
        {socialLinksList.map(({ icon, link }, i) => (
          <a href={link} target="_blank" key={i}>
            <Button color="ghost" outline className="text-white ms-2" size="sm">
              <FontAwesomeIcon icon={icon} />
            </Button>
          </a>
        ))}
      </ButtonToolbar>
    </Navbar>
  );
};

export default Footer;
