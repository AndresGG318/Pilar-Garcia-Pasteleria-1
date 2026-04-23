import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logolado from '../../Img/logoladoblanco.png';
import Tortas from '../../Img/TORTAPNG.png';
import Cupkakes from '../../Img/CUPCAKESPNG.png';
import Galletas from '../../Img/GALLETASPNG.png';
import Amasijos from '../../Img/AMASIJOSPNG.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faImages } from '@fortawesome/free-regular-svg-icons';
import { faCakeCandles, faFilePen, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <Navbar expand="lg" className="header1 fixed-top">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={logolado} width="100%" height="50" className="d-inline-block align-top" alt="React Bootstrap logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link className='links1' href="#Inicio">
                                <FontAwesomeIcon  icon={faHouse}/>Inicio
                        </Nav.Link>
                        <NavDropdown className='nav-link dropdown-toggle links1' title={<><FontAwesomeIcon icon={faImages} style={{ marginRight: '7px' }} />Galería</>} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#Tortas"><img src={Tortas} alt="Galería" className="icono-nav" /> Tortas</NavDropdown.Item>
                            <NavDropdown.Divider className='separador1' />
                            <NavDropdown.Item href="#Cupcakes"><img src={Cupkakes} alt="Galería" className="icono-nav" /> Cupcakes</NavDropdown.Item>
                            <NavDropdown.Divider className='separador1' />
                            <NavDropdown.Item href="#Galletas"><img src={Galletas} alt="Galería" className="icono-nav" /> Galletas</NavDropdown.Item>
                            <NavDropdown.Divider className='separador1' />
                            <NavDropdown.Item href="#Amasijos"><img src={Amasijos} alt="Galería" className="icono-nav" /> Amasijos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='links1' href="#Sabores"><FontAwesomeIcon icon={faCakeCandles} />Sabores</Nav.Link>
                        <Nav.Link className='links1' href="#Blog"><FontAwesomeIcon icon={faFilePen} />Blog</Nav.Link>
                        <Nav.Link className='links1' href="#Nosotros"><FontAwesomeIcon icon={faUsers} />Nosotros</Nav.Link>
                        
                    </Nav>
                    <Nav.Link className='links2' href=""><FontAwesomeIcon icon={faWhatsapp} /></Nav.Link>
                    <Nav.Link className='links2' href=""><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                    <Nav.Link className='links2 me-3' href=""><FontAwesomeIcon icon={faSquareFacebook} /></Nav.Link>
                    <Button className='contacto1 d-flex' href="#Formulario">¡Contáctanos!</Button>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;