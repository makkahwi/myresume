import { useState } from "react";
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

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const links = [
    { title: "Home", link: "/" },
    {
      title: "About",
      links: [
        { title: "About 1", links: "1" },
        { title: "About 2", links: "2" },
        { title: "About 3", links: "3" },
      ],
    },
    { title: "Blog", link: "/" },
    { title: "Contact", link: "/" },
  ];

  return (
    <Navbar className="py-2 px-4" color="dark" dark sticky>
      <NavbarBrand href="/">Reactstrap</NavbarBrand>

      <Nav>
        {links.map(({ title, link, links }, i) => (
          <NavItem key={i}>
            {links ? (
              <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret className="text-white">
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
              <NavLink href={link} className="text-white">
                {title}
              </NavLink>
            )}
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
};

export default NavbarComp;
