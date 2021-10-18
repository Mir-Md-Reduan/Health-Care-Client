import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import icon from '../../../Images/icon.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top" >
                <Container>
                    <div href="#home" className="d-flex justify-content-center align-items-center"><img height="25px" width="25px" src={icon} alt="Icon" />&nbsp;Medicare</div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#doctors">Doctors</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;