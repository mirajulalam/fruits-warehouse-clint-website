import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='text-warning fw-bold fs-3 '>Fruits Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/home'> <button type="button" class="btn btn-link text-decoration-none text-black fw-bold">Home</button></Nav.Link>
                            <Nav.Link href="#deets"> <button type="button" class="btn btn-link text-decoration-none text-black fw-bold ">Blogs</button></Nav.Link>
                            <Nav.Link href="#memes">
                                <button type="button" class="btn btn-link text-decoration-none text-black fw-bold ">Log In</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;