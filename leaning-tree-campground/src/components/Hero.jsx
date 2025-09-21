// components/Hero.jsx
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section id="home" className="hero-bg d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} className="text-white">
            <h1 className="display-3 fw-bold mb-4">Welcome to</h1>
             <h1 className="display-3 fw-bold mb-4">Leaning Tree Woods</h1>
            <p className="lead mb-5">Experience the beauty of nature in solitude with our glamping campsite.</p>
            <Button 
              variant="success" 
              size="lg" 
              href="https://www.hipcamp.com/en-US/land/oklahoma-leaning-tree-woods-1-7rvh12r6?adults=1&children=0&srid=c97f4be8-6dbd-4a8e-8d61-c821686a17ae" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 me-3 mb-3"
            >
              Book Now
            </Button>
            <Button 
              variant="outline-light" 
              size="lg" 
              href="#features" 
              className="px-4 py-2 mb-3"
            >
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
