import {
  faBriefcase,
  faContactBook,
  faHome,
  faMobile,
  faNewspaper,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { socialLinksList } from "pages/_document";
import { Fragment, useState } from "react";
import { Link as ScroolLink } from "react-scroll";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
} from "reactstrap";

const NavbarComp = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((current) => !current);

  const links = [
    {
      title: "Home",
      link: "/",
      icon: faHome,
    },
    {
      title: "Career",
      link: "career",
      icon: faUser,
    },
    { title: "Projects", link: "projects", icon: faBriefcase },
    { title: "Blog", link: "blog", icon: faNewspaper, scroll: true },
    { title: "Contact", link: "contact", icon: faMobile, scroll: true },
    {
      icon: faContactBook,
      links: socialLinksList.map(({ icon, link, label, name }) => ({
        title: (
          <Fragment>
            <FontAwesomeIcon icon={icon} />
            <span className="d-none d-lg-inline"> {label}</span>
            <span className="d-inline d-lg-none"> {name}</span>
          </Fragment>
        ),
        link,
        target: "_blank",
      })),
    },
  ];

  const NavTitle = ({ title, icon }) => (
    <Fragment>
      <FontAwesomeIcon icon={icon} className="me-1 text-white fw-bold" />
      <span className="d-none d-lg-inline text-white fw-bold">{title}</span>
    </Fragment>
  );

  return (
    <Navbar
      className={`py-3 px-5 border-bottom border-light sticky-top w-100 `}
      color="warning"
      light
      style={{ zIndex: 999 }}
      // fixed="top"
    >
      <Link href="/" className="text-decoration-none">
        <NavbarBrand className="fw-bold" role="button">
          <img src="/images/logo.png" width="40px" className="me-3" />{" "}
          <span className="d-none d-lg-inline text-white">Suhaib Ahmad</span>
        </NavbarBrand>
      </Link>

      <Nav>
        {links.map(({ title, link, links, icon, scroll }, i) => (
          <NavItem key={i}>
            {links ? (
              <Dropdown
                nav
                isOpen={dropdownOpen}
                toggle={toggle}
                tag="span"
                direction="start"
              >
                <DropdownToggle nav caret className="text-white">
                  <NavTitle icon={icon} title={title} />
                </DropdownToggle>

                <DropdownMenu>
                  {links.map(({ title, link, target }, y) => (
                    <a
                      className="p-0 m-0 text-decoration-none"
                      href={link}
                      target={target}
                      key={y}
                    >
                      <DropdownItem tag="span">{title}</DropdownItem>
                    </a>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : scroll ? (
              <ScroolLink
                to={link}
                className="text-white fw-bold text-decoration-none"
              >
                <NavLink role="button" tag="span">
                  <NavTitle icon={icon} title={title} />
                </NavLink>
              </ScroolLink>
            ) : (
              <Link
                href={link}
                className="text-white fw-bold text-decoration-none"
              >
                <NavLink role="button" tag="span">
                  <NavTitle icon={icon} title={title} />
                </NavLink>
              </Link>
            )}
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
};

export default NavbarComp;
