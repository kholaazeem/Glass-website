import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './OurPromise.css';


const OurPromise = () => {
  // Card Data taaki code clean rahay
  const promiseData = [
    {
      id: 1,
      title: "Secret Recipe",
      desc: "Our pastries are crafted using a time-honored recipe passed down through generations, guarded and perfected over decades.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Made for Two",
      desc: "Every creation is designed for couples who appreciate life's finer moments and cherish sharing sweetness together.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Low Calorie",
      desc: "Indulge without compromise. Our innovative techniques deliver rich flavors with fewer calories—guilt-free pleasure.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      id: 4,
      title: "Home Delivery",
      desc: "Fresh pastries shipped directly to your doorstep, carefully packaged to preserve their delicate elegance.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      )
    }
  ];

  return (
    <section className="promise-section py-5">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="section-subtitle">Our Philosophy</h5>
          <h2 className="section-title">The Glass Promise</h2>
        </div>

        {/* Cards Row */}
        <Row className="g-4">
          {promiseData.map((item) => (
            <Col lg={3} md={6} sm={12} key={item.id}>
              <Card className="promise-card h-100 text-center border-0 p-4">
                <Card.Body>
                  <div className="icon-box mb-4 mx-auto">
                    {item.icon}
                  </div>
                  <Card.Title className="card-heading mb-3">{item.title}</Card.Title>
                  <Card.Text className="card-desc text-muted">
                    {item.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurPromise;