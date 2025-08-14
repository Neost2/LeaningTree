// components/Footer.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={4} className="mb-3 mb-md-0">
            <h3 className="h5">Leaning Tree Campground</h3>
            <p className="mb-0 small">Your premier camping destination since 1978</p>
          </Col>
          
          <Col md={4} className="text-md-center mb-3 mb-md-0">
            <div className="d-flex justify-content-md-center">
              <a href="#" className="text-white me-3" aria-label="Facebook">
                <FaFacebook className="fs-4" />
              </a>
              <a href="#" className="text-white me-3" aria-label="Twitter">
                <FaTwitter className="fs-4" />
              </a>
              <a href="#" className="text-white me-3" aria-label="Instagram">
                <FaInstagram className="fs-4" />
              </a>
              <a href="#" className="text-white" aria-label="YouTube">
                <FaYoutube className="fs-4" />
              </a>
            </div>
          </Col>
          
          <Col md={4} className="text-md-end">
            <p className="mb-0 small">&copy; {new Date().getFullYear()} Leaning Tree Campground. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
