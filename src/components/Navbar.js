import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import logo from "./img/proje-lab.svg";


const NavbarProject = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const nav = {
    "box-shadow": "0px 4px 4px rgba(0,0,0,.125)"
  };
  const navLinks = {
    "margin-right": "32px",
    color: "black"
  }

  const subtitle = {
    "font-size": "12px",
    color: "rgba(0,0,0,.5)"
  }

  return (
    <div>
      <Navbar style={nav} light expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" style={navLinks}>
                Accueil
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/profile" style={navLinks}>
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