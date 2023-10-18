import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinksList } from "pages/_document";
import { Button, ButtonToolbar, Navbar, NavbarText } from "reactstrap";

const Footer = () => {
  return (
    <Navbar className="py-4 px-4" color="dark" dark>
      <NavbarText>
        <small className="text-white p-0 m-0">
          All Rights Reserved For Suhaib Ahmad © {new Date().getFullYear()}
        </small>
      </NavbarText>

      <ButtonToolbar>
        {socialLinksList.map(({ icon, link }, i) => (
          <a href={link} target="_blank" key={i}>
            <Button color="ghost" className="text-white">
              <FontAwesomeIcon icon={icon} />
            </Button>
          </a>
        ))}
      </ButtonToolbar>
    </Navbar>
  );
};

export default Footer;
