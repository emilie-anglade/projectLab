import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavbarProject = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const nav = {
    background: "#2F4A5E",
    color: "white",
  };
  const navLinks = {
    "margin-right": "32px",
    color: "white",
  }

  return (
    <div>
      <Navbar style={nav} dark expand="md">
        <NavbarBrand style={nav} href="/">
          ProjectLab
        </NavbarBrand>
        <NavbarToggler style={nav} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={navLinks} href="/components/">
                Acceuil
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={navLinks} href="/components/">
                Mon profil
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={navLinks}
                href="https://github.com/reactstrap/reactstrap"
              >
                Projets
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarProject;