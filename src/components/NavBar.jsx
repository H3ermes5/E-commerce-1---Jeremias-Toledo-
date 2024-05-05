import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} className='titulo' to="">SILICA</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/category/t-shirt">T-SHIRT</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/pant">PANT</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/accesorie">ACCESSORIE</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
};
