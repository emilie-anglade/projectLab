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

  const disconnect = () => {
    alert(`Déconnecté !`);
  };

  const toggle = () => setIsOpen(!isOpen);
  const nav = {
    "box-shadow": "0px 4px 4px rgba(0,0,0,.125)"
  };
  const navLinks = {
    "margin-right": "32px",
    color: "black"
  }

  const red = {
    "margin-right": "32px",
    color: "tomato"
  }

  return (
    <div>
      <Navbar style={nav} light expand="md">
        <NavbarBrand href="/profile">
          <img src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink tag={Link} to="/profile" style={navLinks}>
                Mon Profil
              </NavLink>
            </NavItem>
          <NavItem>
              <NavLink tag={Link} to="/memberslist" style={navLinks}>
                CoMakers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={disconnect} tag={Link} to="/" style={red}>
                Déconnexion
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarProject;