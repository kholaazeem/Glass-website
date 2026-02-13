import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // 1. Link import kiya
import './GiftCollections.css';

const GiftCollections = () => {
  const collections = [
    {
      id: 1,
      title: "The Lovers' Box",
      desc: "An assortment of 12 pieces, perfect for romantic evenings.",
      price: "$45.00"
    },
    {
      id: 2,
      title: "Anniversary Collection",
      desc: "24 premium pieces with exclusive seasonal flavors.",
      price: "$85.00"
    },
    {
      id: 3,
      title: "Monthly Subscription",
      desc: "Fresh pastries delivered monthly for couples who crave more.",
      price: "From $35/month"
    }
  ];

  return (
    <section className="gift-section">
      <Container>
        
        {/* Header */}
        <div className="text-center mb-5">
          <h5 className="gift-subtitle">Curated for Couples</h5>
          <h2 className="gift-title">Gift Collections</h2>
        </div>

        {/* Cards Grid */}
        <Row className="g-4 justify-content-center">
          {collections.map((item) => (
            <Col lg={4} md={6} sm={12} key={item.id}>
              <div className="gift-card text-center">
                <h3 className="gift-card-title">{item.title}</h3>
                <p className="gift-card-desc">{item.desc}</p>
                <div className="gift-price">{item.price}</div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Bottom Button (Linked to Collections Page) */}
        <div className="text-center mt-5">
          <Button 
            as={Link} 
            to="/collections" 
            className="btn-view-all"
          >
            <span className="me-2">🎁</span> View All Collections
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default GiftCollections;