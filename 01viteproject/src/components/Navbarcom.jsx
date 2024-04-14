import React from 'react'
import './Navbarcom.css';
import logo from '../assets/image/logo.png'
import {Link} from 'react-scroll'
import icon from '../assets/image/icon.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbarcom = () => {
  return (




<Navbar expand="lg" className='nav' >
      <Container>
        <Navbar.Brand href="#home">      <img src={logo} alt='error' className='logo'/>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navmain">
          <NavDropdown.Item >
            <Link to='home' smooth={true} offset={-260} duration={500}>Home</Link>
            </NavDropdown.Item>
          <NavDropdown.Item >
        <Link to='about' smooth={true} offset={-260} duration={500}>About us</Link>
            </NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     



  )
}

export default Navbarcom