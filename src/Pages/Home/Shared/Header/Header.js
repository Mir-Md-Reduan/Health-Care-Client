import React from 'react';
import { Button, Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import './Header.css'
import icon from '../../../../Images/icon.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top" >
                <Container>
                    <img height="25px" width="25px" src={icon} alt="Icon" />&nbsp;Medicare
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} className="header-link" to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} className="header-link" to="/home#doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} className="header-link" to="/home#about">About</Nav.Link>
                            <Nav.Link as={HashLink} className="header-link" to="#contact">Contact</Nav.Link>
                            {
                                user?.email ?
                                    <Button onClick={logOut} variant="light">LogOut</Button> :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            <Navbar.Text>
                                Log in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;