import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className='fs-4 fw-bold ' href="#home">Heros <span className='text-danger'>Recipe</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <Link className='fs-5 fw-bold me-3 text-secondary text-decoration-none' to ='/'>Home</Link>
                <Link className='fs-5 fw-bold me-3 text-secondary text-decoration-none' to ='/blog'>Blog</Link>
            </Nav>
            <Nav>
              <Nav.Link  href="#deets">
              {/* <Image src="holder.js/171x180" roundedCircle /> */}
              <Button className='fs-5 fw-bold ' variant="danger">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;