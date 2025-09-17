// components/Features.jsx
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCampground, FaWifi, FaShower, FaSwimmingPool, FaStore, FaHiking } from 'react-icons/fa';

function Features() {
  const features = [
    {
      icon: <FaCampground className="fs-1 text-success mb-3" />,
      title: "Premium Glampsite",
      description: "Spacious, well-maintained site with fire pit, picnic table, camping shower, camping toilet, and solar generator."
    },
    {
      icon: <FaSwimmingPool className="fs-1 text-success mb-3" />,
      title: "Swimming Area",
      description: "Natural swimming area nearby at Zena Cove."
    },
    {
      icon: <FaHiking className="fs-1 text-success mb-3" />,
      title: "Hiking Trail",
      description: "Access to scenic hiking trail for all skill levels."
    }
  ];

  return (
    <section id="features" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-4">Campground Features</h2>
            <p className="lead">Everything you need for a comfortable outdoor experience</p>
          </Col>
        </Row>
        <Row>
          {features.map((feature, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  {feature.icon}
                  <Card.Title className="fw-bold">{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Features;
