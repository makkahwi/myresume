import { socialLinksList } from "@/consts/data";
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
import { Fragment } from "react";
import {
  DropdownButton,
  DropdownItem,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";

const NavbarComp = () => {
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
    { title: "Blog", link: "blog", icon: faNewspaper },
    { title: "Contact", link: "contact", icon: faMobile },
    {
      icon: faContactBook,
      links: socialLinksList.map(({ icon, link, label, name, color }) => ({
        title: (
          <Fragment>
            <FontAwesomeIcon icon={icon} />
            <span className="d-none d-lg-inline"> {label}</span>
            <span className="d-inline d-lg-none"> {name}</span>
          </Fragment>
        ),
        link,
        color,
        target: "_blank",
      })),
    },
  ];

  const NavTitle = ({ title, icon }: { title?: string; icon: any }) => (
    <Fragment>
      <FontAwesomeIcon icon={icon} className="me-1 text-white fw-bold" />
      <span className="text-white fw-bold">{title}</span>
    </Fragment>
  );

  return (
    <Navbar
      expand="lg"
      className="py-3 px-5 border-bottom border-light"
      bg="warning"
      sticky="top"
    >
      <NavbarBrand className="fw-bold" role="button">
        <Link href="/" className="text-decoration-none">
          <img src="/images/logo.png" width="40px" className="me-3" />{" "}
          <span className="text-white">Suhaib Ahmad</span>
        </Link>
      </NavbarBrand>

      <NavbarToggle aria-controls="navbarScroll" />

      <NavbarCollapse className="justify-content-end">
        <Nav>
          {links.map(({ title, link, links, icon }, i) => (
            <NavItem key={i}>
              {links ? (
                <DropdownButton
                  variant="transparent"
                  drop="start"
                  data-bs-theme="dark"
                  title={<NavTitle icon={icon} title={title} />}
                >
                  {links.map(({ title, link, target, color }, y) => (
                    <DropdownItem
                      href={link}
                      target={target}
                      style={{ backgroundColor: color, color: "white" }}
                      className="py-2"
                      key={y}
                    >
                      {title}
                    </DropdownItem>
                  ))}
                </DropdownButton>
              ) : (
                <NavLink>
                  <Link
                    href={link}
                    className="text-white fw-bold text-decoration-none"
                  >
                    <NavTitle icon={icon} title={title} />
                  </Link>
                </NavLink>
              )}
            </NavItem>
          ))}
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavbarComp;
