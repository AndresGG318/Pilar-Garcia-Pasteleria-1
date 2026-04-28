import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { NavLink } from "react-router-dom";

import logolado from "../../Img/logoladoblanco.png";
import Tortas from "../../Img/TORTAPNG.png";
import Cupkakes from "../../Img/CUPCAKESPNG.png";
import Galletas from "../../Img/GALLETASPNG.png";
import Amasijos from "../../Img/AMASIJOSPNG.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faImages } from "@fortawesome/free-regular-svg-icons";
import { faCakeCandles, faFilePen, faUsers } from "@fortawesome/free-solid-svg-icons";
import {  faWhatsapp, faInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <Navbar expand="lg" className="header1 fixed-top">
      <Container fluid>
        {/* LOGO */}
        <Navbar.Brand as={NavLink} to="/">
          <img src={logolado} height="50" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {/* INICIO */}
            <NavLink to="/" className="nav-link links1" end>
              <FontAwesomeIcon icon={faHouse} /> Inicio
            </NavLink>

            {/* GALERÍA */}
            <NavDropdown
              className="nav-link dropdown-toggle links1"
              title={<> <FontAwesomeIcon icon={faImages} style={{ marginRight: "7px" }} /> Galería </> } id="navbarScrollingDropdown">

              <NavDropdown.Item as={NavLink} to="/Tortas">
                <img src={Tortas} className="icono-nav" alt="Tortas" /> Tortas
              </NavDropdown.Item>

              <NavDropdown.Divider className="separador1" />

              <NavDropdown.Item as={NavLink} to="/Cupcakes">
                <img src={Cupkakes} className="icono-nav" alt="Cupcakes" />{" "}
                Cupcakes
              </NavDropdown.Item>

              <NavDropdown.Divider className="separador1" />

              <NavDropdown.Item as={NavLink} to="/Galletas">
                <img src={Galletas} className="icono-nav" alt="Galletas" />{" "}
                Galletas
              </NavDropdown.Item>

              <NavDropdown.Divider className="separador1" />

              <NavDropdown.Item as={NavLink} to="/Amasijos">
                <img src={Amasijos} className="icono-nav" alt="Amasijos" />{" "}
                Amasijos
              </NavDropdown.Item>
            </NavDropdown>

            {/* SABORES */}
            <NavLink to="/Sabores" className="nav-link links1">
              <FontAwesomeIcon icon={faCakeCandles} /> Sabores
            </NavLink>

            {/* BLOG */}
            <NavLink to="/Blog" className="nav-link links1">
              <FontAwesomeIcon icon={faFilePen} /> Blog
            </NavLink>

            {/* NOSOTROS */}
            <NavLink to="/Nosotros" className="nav-link links1">
              <FontAwesomeIcon icon={faUsers} /> Nosotros
            </NavLink>
          </Nav>

          {/* REDES */}
          <Nav.Link className="links2" href="https://wa.me/573162397143" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </Nav.Link>
          <Nav.Link className="links2"  href="https://www.instagram.com/pilargarciapasteleria?utm_source=qr&igsh=cWEydDk0ajN0MG10" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </Nav.Link>
          <Nav.Link className="links2 me-3" href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSquareFacebook} />
          </Nav.Link>

          {/* BOTÓN */}
          <Button as={NavLink} to="/Contacto" className="contacto1 d-flex">
            ¡Contáctanos!
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
