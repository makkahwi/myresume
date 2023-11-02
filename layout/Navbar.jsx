import { faBriefcase, faContactBook, faHome, faMobile, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinksList } from "pages/_document";
import { Fragment, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

const NavbarComp = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((current) => !current);

  const links = [
    {
      title: "About",
      link: "about",
      icon: faUser,
    },
    { title: "Works", link: "works", icon: faBriefcase },
    { title: "Blog", link: "blog", icon: faNewspaper },
    { title: "Contact", link: "contact", icon: faMobile },
    {
      icon: faContactBook,
      links: socialLinksList.map(({ icon, link, name }) => ({
        title: (
          <span>
            <FontAwesomeIcon icon={icon} /> {name}
          </span>
        ),
        link,
        target: "_blank",
      })),
    },
  ];

  const NavTitle = ({ title, icon }) => (
    <Fragment>
      <FontAwesomeIcon icon={icon} className="me-1" />
      <span className="d-none d-lg-inline">{title}</span>
    </Fragment>
  );

  return (
    <Navbar
      className="py-3 px-4 border-bottom border-light"
      color="warning"
      light
      fixed="top"
    >
      <NavbarBrand
        className="fw-bold"
        onClick={() => scroll.scrollToTop()}
        role="button"
      >
        <img src="/images/logo-black.png" width="40px" className="me-3" />{" "}
        <span className="d-none d-lg-inline">Suhaib Ahmad</span>
      </NavbarBrand>

      <Nav>
        <NavItem>
          <NavLink
            onClick={() => scroll.scrollToTop()}
            role="button"
            className="text-dark fw-bold mx-2 text-decoration-none"
          >
            <NavTitle icon={faHome} title="Home" />
          </NavLink>
        </NavItem>

        {links.map(({ title, link, links, icon }, i) => (
          <NavItem key={i}>
            {links ? (
              <Dropdown nav isOpen={dropdownOpen} toggle={toggle} tag="span">
                <DropdownToggle nav caret className="text-dark">
                  <NavTitle icon={icon} title={title} />
                </DropdownToggle>

                <DropdownMenu>
                  {links.map(({ title, link, target }, y) => (
                    <a className="p-0 m-0" href={link} target={target} key={y}>
                      <DropdownItem tag="span">{title}</DropdownItem>
                    </a>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavLink role="button" tag="span">
                <Link
                  to={link}
                  className="text-dark fw-bold text-decoration-none"
                >
                  <NavTitle icon={icon} title={title} />
                </Link>
              </NavLink>
            )}
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
};

export default NavbarComp;
