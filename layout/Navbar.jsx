import { useState } from "react";
import { Link } from "react-scroll";
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
    { title: "Home", link: "home" },
    {
      title: "About",
      link: "about",
    },
    // {
    //   title: "About",
    //   links: [
    //     { title: "About 1", links: "1" },
    //     { title: "About 2", links: "2" },
    //     { title: "About 3", links: "3" },
    //   ],
    // },
    { title: "Works", link: "works" },
    { title: "Blog", link: "blog" },
    { title: "Contact", link: "contact" },
  ];

  return (
    <Navbar
      className="py-3 px-4 border-bottom border-light"
      color="warning"
      light
      fixed="top"
      full
    >
      <NavbarBrand href="/" className="fw-bold">
        <img src="/images/logo.png" width="40px" className="me-3" />
        Suhaib Ahmad
      </NavbarBrand>

      <Nav>
        {links.map(({ title, link, links }, i) => (
          <NavItem key={i}>
            {links ? (
              <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret className="text-dark">
                  {title}
                </DropdownToggle>

                <DropdownMenu>
                  {/* <DropdownItem header>Header</DropdownItem> */}
                  {links.map(({ title, link }, y) => (
                    <DropdownItem key={y}>{title}</DropdownItem>
                  ))}
                  {/* <DropdownItem divider /> */}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link to={link} style={{ cursor: "pointer" }}>
                <NavLink className="text-dark fw-bold">{title}</NavLink>
              </Link>
            )}
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
};

export default NavbarComp;
