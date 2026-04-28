import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // 👈 IMPORTANTE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-regular-svg-icons';
import { faCakeCandles, faFilePen, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer1 text-white mt-5 p-4">
      <Container>

        <Row className="mt-3">

          {/* NOSOTROS */}
          <Col md={5}>
            <h5 className="titulosFooter">Nosotros</h5>
            <p>
              Horneamos con amor para que cada bocado cuente una historia, creando momentos maravillosos que se convierten en recuerdos inolvidables.
            </p>
          </Col>

          {/* ENLACES */}
          <Col md={4}>
            <h5 className="titulosFooter">Enlaces Rápidos</h5>
            <ul className="list-unstyled">

              <li>
                <NavLink to="/" className="text-white links">
                  <FontAwesomeIcon className="linksicono" icon={faHouse}/> Inicio
                </NavLink>
              </li>

              <li>
                <NavLink to="/Sabores" className="text-white links">
                  <FontAwesomeIcon className="linksicono" icon={faCakeCandles}/> Sabores
                </NavLink>
              </li>

              <li>
                <NavLink to="/Blog" className="text-white links">
                  <FontAwesomeIcon className="linksicono" icon={faFilePen}/> Blog
                </NavLink>
              </li>

              <li>
                <NavLink to="/Nosotros" className="text-white links">
                  <FontAwesomeIcon className="linksicono" icon={faUsers}/> Nosotros
                </NavLink>
              </li>
            </ul>
          </Col>

          {/* CONTACTO (REDES) */}
          <Col md={3}>
            <h5 className="titulosFooter">Contacto</h5>
            <ul className="list-unstyled">

              <li>
                <a 
                  href="https://wa.me/573162397143" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white links"
                >
                  <FontAwesomeIcon className="linksicono" icon={faWhatsapp}/> WhatsApp
                </a>
              </li>

              <li>
                <a 
                  href="https://www.instagram.com/pilargarciapasteleria?utm_source=qr&igsh=cWEydDk0ajN0MG10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white links"
                >
                  <FontAwesomeIcon className="linksicono" icon={faInstagram}/> Instagram
                </a>
              </li>

              <li>
                <a 
                  href="https://facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white links"
                >
                  <FontAwesomeIcon className="linksicono" icon={faSquareFacebook}/> Facebook
                </a>
              </li>

            </ul>
          </Col>

        </Row>

        <hr className="bg-light" />

        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Pilar García Pastelería</p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;