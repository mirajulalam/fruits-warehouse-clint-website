import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className=' fw-bold fs-3 '>Fruits Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/home'> <button type="button" className="btn btn-link text-decoration-none text-white fw-bold">Home</button></Nav.Link>
                            <Nav.Link as={Link} to='/blogs'> <button type="button" className="btn btn-link text-decoration-none text-white fw-bold ">Blogs</button></Nav.Link>
                            {user && <>
                                <Nav.Link as={Link} to="/login">
                                    <button type="button" className="btn btn-link text-decoration-none text-white fw-bold ">Manage Item</button>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/login">
                                    <button type="button" className="btn btn-link text-decoration-none text-white fw-bold ">Add Item</button>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/login">
                                    <button type="button" className="btn btn-link text-decoration-none text-white fw-bold ">My Item</button>
                                </Nav.Link>
                            </>}
                            {user ? <button className='btn btn-link text-white text-decoration-none fw-bold' onClick={handleSignOut}>Log Out</button> : <Nav.Link as={Link} to="/login">
                                <button type="button" className="btn btn-link text-decoration-none text-white fw-bold ">Log In</button>
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;