import React from 'react';
import CartWidget from './CartWidget';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <CartWidget />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavigationBar;
