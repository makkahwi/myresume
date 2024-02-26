"use client";

import { Container, Nav, Navbar, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-scroll";

import { links } from "../Navbar";

const FooterNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Nav className="mx-auto">
          {links.map(({ title, link }, i) => (
            <Link to={link} role="button" key={i}>
              <NavItem>
                <NavLink className="text-white">{title}</NavLink>
              </NavItem>
            </Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default FooterNav;
