import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">Blog</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/posts/add">
                  Add Post
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/contact">
                  Contacts
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;