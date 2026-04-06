import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logolado from '../../Img/logoladoblanco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faImages } from '@fortawesome/free-regular-svg-icons';
import { faCakeCandles, faFilePen, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <Navbar expand="lg" className="header1">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={logolado} width="100%" height="50" className="d-inline-block align-top" alt="React Bootstrap logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link className='links1' href="#action1" >
                                <FontAwesomeIcon  icon={faHouse}/>Inicio
                        </Nav.Link>
                        <NavDropdown className='nav-link dropdown-toggle links1' title={<><FontAwesomeIcon icon={faImages} style={{ marginRight: '7px' }} />Galería</>} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action2">Tortas</NavDropdown.Item>
                            <NavDropdown.Divider className='separador1' />
                            <NavDropdown.Item href="#action3">Cupckaes</NavDropdown.Item>
                            <NavDropdown.Divider className='separador1' />
                            <NavDropdown.Item href="#action4">Galletas</NavDropdown.Item>
                            <NavDropdown.Divider className='separador1' />
                            <NavDropdown.Item href="#action5">Amasijos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='links1' href="#action6"><FontAwesomeIcon icon={faCakeCandles} />Sabores</Nav.Link>
                        <Nav.Link className='links1' href="#action7"><FontAwesomeIcon icon={faFilePen} />Blog</Nav.Link>
                        <Nav.Link className='links1' href="#action8"><FontAwesomeIcon icon={faUsers} />Nosotros</Nav.Link>
                        
                    </Nav>
                    <Nav.Link className='links2' href="#action9"><FontAwesomeIcon icon={faWhatsapp} /></Nav.Link>
                    <Nav.Link className='links2' href="#action10"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                    <Nav.Link className='links2 me-3' href="#action11"><FontAwesomeIcon icon={faSquareFacebook} /></Nav.Link>
                    <Button className='contacto1 d-flex'>¡Contáctanos!</Button>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;