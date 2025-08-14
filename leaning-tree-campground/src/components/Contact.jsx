// components/Contact.jsx
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-4">Contact Us</h2>
            <p className="lead">Get in touch for reservations or inquiries</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={5} md={6} className="mb-4 mb-md-0">
            <h3 className="h4 mb-4">Contact Information</h3>
            
            <div className="d-flex mb-4">
              <div className="me-3">
                <FaPhone className="text-success fs-4" />
              </div>
              <div>
                <h4 className="h6 mb-1">Phone</h4>
                <p className="mb-0">(555) 123-4567</p>
              </div>
            </div>
            
            <div className="d-flex mb-4">
              <div className="me-3">
                <FaEnvelope className="text-success fs-4" />
              </div>
              <div>
                <h4 className="h6 mb-1">Email</h4>
                <p className="mb-0">info@leaningtreecampground.com</p>
              </div>
            </div>
            
            <div className="d-flex mb-4">
              <div className="me-3">
                <FaMapMarkerAlt className="text-success fs-4" />
              </div>
              <div>
                <h4 className="h6 mb-1">Address</h4>
                <p className="mb-0">Jay, OK outside of Grand Lake</p>
              </div>
            </div>
          </Col>
          
          <Col lg={5} md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" required />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your email" required />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" required />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" required />
              </Form.Group>
              
              <Button variant="success" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
