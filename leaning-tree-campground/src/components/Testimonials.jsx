// components/Testimonials.jsx
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

function Testimonials() {
  const testimonials = [
    {
      name: "Melinda D",
      text: "Great place for hiking and getting away in the woods. The trails are very well marked and the ropes help those of us that are , let’s just say, out of shape😆. Will definitely be back. Carol has thought of everything you could need and then some! Love her and her land!",
      stars: 5
    },
    {
      name: "Amanda B.",
      text: "Great place to stay. She had everything I needed all set up and ready to go. Will be going back. Very good location to stay. Low key. Just loved it",
      stars: 5
    },
    {
      name: "Brian",
      text: "Perfect place for a quick easy getaway in the woods. Feels secluded but you’re not that far away from civilization. Carol was friendly and accommodating. Would definitely recommend for those looking for something in between regular old camping and all out “glamping”. As a backpacker, the trail was fun, challenging, and not too long.",
      stars: 5
    },
    {
      name: "Colt",
      text: "The tent was a bit remote but if that's not what you're looking for in a camping trip I don't know what to tell you. Carol was very friendly and willing to help with anything we needed. Would definitely stay again.",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-4">What Our Guests Say</h2>
            <p className="lead">Don't just take our word for it</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Carousel controls={true} indicators={true} interval={5000} className="testimonial-carousel">
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <Card className="border-0 shadow mb-4 mx-2">
                    <Card.Body className="p-4 text-center">
                      <div className="mb-3">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <FaStar key={i} className="text-warning" />
                        ))}
                      </div>
                      <Card.Text className="mb-4 fs-5 fst-italic">"{testimonial.text}"</Card.Text>
                      <Card.Title className="mb-0 fw-bold">- {testimonial.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
