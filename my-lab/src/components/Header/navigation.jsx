import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';  

export default function Navigation() {
  const [show, setShow] = useState(false); 

  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);   

  return (
    <>
    

      <Navbar  className="ps-4">
      <Button variant="transparent" className="me-2" id="burger-button" onClick={handleShow}>
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="desktop-nav">
        <Nav>
            <Nav.Link as={Link} to="/welcome">
              Wooden Furniture
            </Nav.Link>
            <Nav.Link as={Link} to="/informationus">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/cards">
              Stories
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} id="offcanvas-menu" placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/welcome" onClick={handleClose}>
              Wooden Furniture
            </Nav.Link>
            <Nav.Link as={Link} to="/informationus" onClick={handleClose}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/cards" onClick={handleClose}>
              Stories
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
