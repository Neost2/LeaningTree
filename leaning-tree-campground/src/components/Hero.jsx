// components/Hero.jsx
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section id="home" className="hero-bg d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} className="text-white">
            <h1 className="display-3 fw-bold mb-4">Welcome to Leaning Tree Campground</h1>
            <p className="lead mb-5">Experience the beauty of nature with our premium camping facilities</p>
            <Button 
              variant="success" 
              size="lg" 
              href="#contact" 
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
