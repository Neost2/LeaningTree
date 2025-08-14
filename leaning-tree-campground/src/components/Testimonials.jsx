// components/Testimonials.jsx
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "We had an amazing time at Leaning Tree Campground. The facilities were clean and the staff was extremely helpful.",
      stars: 5
    },
    {
      name: "Mike Peterson",
      text: "Great location with beautiful views. The hiking trails were phenomenal and the campsites were well-maintained.",
      stars: 5
    },
    {
      name: "Emily Rodriguez",
      text: "Perfect weekend getaway! The swimming area was refreshing and the camp store had everything we needed.",
      stars: 4
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
