// components/Activities.jsx
import { Container, Row, Col, Card } from 'react-bootstrap';

function Activities() {
  const activities = [
    {
      image: "/src/assets/images/Hiking.jpg",
      title: "Hiking",
      description: "Challenge your fitness on our mile long trail or take the short route."
    },
    {
      image: "/src/assets/images/Fishing.jpg",
      title: "Fishing",
      description: " Cast a line in Grand Lake for three types of bass, black and white crappy, or blue and channel catfish."
    },
    {
      image: "/src/assets/images/Swimming.jpg",
      title: "Swimming",
      description: " Take the heat out of summer by cooling off in the lake."
    },
    {
      image: "/src/assets/images/Wildlife.png",
      title: "Wildlife Viewing",
      description: "Observe local wildlife in their natural habitat."
    }
  ];

  return (
    <section id="activities" className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-4">Activities</h2>
            <p className="lead">Make the most of your stay with these fantastic activities</p>
          </Col>
        </Row>
        <Row>
          {activities.map((activity, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <Card className="h-100 border-0 shadow">
                <Card.Img variant="top" src={activity.image} alt={activity.title} className="img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title className="fw-bold">{activity.title}</Card.Title>
                  <Card.Text>{activity.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Activities;
