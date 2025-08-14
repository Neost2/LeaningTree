// components/Header.jsx
import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home">Leaning Tree Woods Campground</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#features" onClick={() => setExpanded(false)}>Features</Nav.Link>
            <Nav.Link href="#activities" onClick={() => setExpanded(false)}>Activities</Nav.Link>
            <Nav.Link href="#testimonials" onClick={() => setExpanded(false)}>Testimonials</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
