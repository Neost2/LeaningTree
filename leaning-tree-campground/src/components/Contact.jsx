// components/Contact.jsx
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    // Get form values
  const name = e.target.elements[0].value;
  const email = e.target.elements[1].value;
  const subject = e.target.elements[2].value;
  const message = e.target.elements[3].value;
  
  // Email configuration
  const mailtoLink = `mailto:staff@leaningtreewoods.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  
  // Open email client
  window.location.href = mailtoLink;
  
  // Optional: Reset the form after submission
  e.target.reset();
  
  // Optional: Show success message
  alert('Email link generated. Your default email client should open.');
    // alert('Thank you for your message! We will get back to you soon.');
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
                <p className="mb-0">(918)964-6358</p>
              </div>
            </div>
            
            <div className="d-flex mb-4">
              <div className="me-3">
                <FaEnvelope className="text-success fs-4" />
              </div>
              <div>
                <h4 className="h6 mb-1">Email</h4>
                <p className="mb-0">staff@leaningtreewoods.com</p>
              </div>
            </div>
            
            <div className="d-flex mb-4">
              <div className="me-3">
                <FaMapMarkerAlt className="text-success fs-4" />
              </div>
              <div>
                <h4 className="h6 mb-1">Address</h4>
                <p className="mb-0">Jay, OK near Grand Lake. Text for a Google pin.</p>
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
