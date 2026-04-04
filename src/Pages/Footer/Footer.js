import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = (props) => {
  return (
        <footer className="footer1 text-white mt-5 p-4">
          <Container>
            <Row>
              <Col md={4}>
                <h5>About Us</h5>
                <p>Your company description goes here.</p>
              </Col>
              <Col md={4}>
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-white">
                      About
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={4}>
                <h5>Contact</h5>
                <p>Email: info@example.com</p>
              </Col>
            </Row>
            <hr className="bg-light" />
            <Row>
              <Col className="text-center">
                <p>&copy; {new Date().getFullYear()} Your Brand</p>
              </Col>
            </Row>
          </Container>
        </footer>
  );
};

export default Footer;
