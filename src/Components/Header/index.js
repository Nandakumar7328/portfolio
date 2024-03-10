import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './index.css'
const Header = () => {
    return(
      <Navbar className='width-nav'  variant="dark" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className='mx-5'>Home</Nav.Link>
          <Nav.Link href="#work" className='mx-5'>Recent Work</Nav.Link>
          <Nav.Link href="#certificate" className='mx-5'>Certificates</Nav.Link>
          <Nav.Link href="#Get" className='mx-5'>Get In Touch</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}


export default Header

