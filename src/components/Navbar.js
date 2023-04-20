import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "bulma/css/bulma.css";
import './components.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const location = useLocation();

  const handleAboutClick = () => {
    if (props.onAboutClick) {
      props.onAboutClick();
    }
  };

  const handleHomeClick = () => {
    if (props.onHomeClick) {
      props.onHomeClick();
    }
  };

  return (
    <section class="hero is-small is-primary">
  <div class="hero-body">
    <p class="title">
      Derek Roberts
    </p>
    <p class="subtitle">
      Full-Stack Web Developer
    </p>
  </div>

    <Nav
      bg="success"
      fixed="top"
      variant="tabs success"
      className="NavDiv justify-content-left"
      activeKey={location.pathname}
    >
      {/* added burger needs to function  */}
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

      <Nav.Item>
        <Nav.Link as={Link} to="/" eventKey="/" onClick={handleHomeClick}>
          <FontAwesomeIcon icon={faHome} size="1.5x" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/about"
          eventKey="/about"
          onClick={handleAboutClick}
        >
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/projects" eventKey="/projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/resume" eventKey="/resume">
          Resume
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contact" eventKey="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  </section>
  );
}

export default Navbar;
