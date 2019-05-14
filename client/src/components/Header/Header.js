import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../../assets/Logo.PNG";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="navbar navbar-default navbar-expand-xl navbar-light">
        <div className="navbar-header d-flex col">
          
          <LinkContainer to="/profile">
            <Navbar.Brand className="navbar-brand" href="#home">
            <img src={Logo} width="120" height="50" alt="" />
            </Navbar.Brand>
          </LinkContainer>
         
        </div>
        <div className="collapse navbar-collapse justify-content-start">
          <Nav className="nav navbar-nav navbar-right ml-auto" >
            <LinkContainer to="/profile">
              <NavItem className="nav-link" > Home</NavItem>
            </LinkContainer>

            {/* <LinkContainer to="/view">
              <NavItem className="nav-link">Dashboard</NavItem>
            </LinkContainer> */}
            <LinkContainer to="/">
              <NavItem className="nav-link">Logout</NavItem>
            </LinkContainer>
          </Nav>
        </div>
      </Navbar>
      
    </div>
  );
};

export default Header;
