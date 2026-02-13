import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // 1. IMPORT ADDED
import './OurPastries.css';
import GiftCollections from '../components/GiftCollections';
import '../components/GiftCollections.css'; 

const OurPastries = () => {
  const { hash } = useLocation();
  const { addToCart } = useCart(); // 2. HOOK USE KIYA

  useEffect(() => {
    if (hash === '#gift-collections') {
      const element = document.getElementById('gift-collections');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const pastries = [
    {
      id: 1,
      title: "Velvet Cream Puff",
      price: "$4.50",
      desc: "Our signature creation, filled with silky vanilla cream using our secret low-calorie formula.",
      calories: "85 cal",
      img: "../src/assets/pastry-cream-puff.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Lavender Macaron",
      price: "$3.50",
      desc: "Delicate French macarons infused with Provence lavender.",
      calories: "65 cal",
      img: "../src/assets/pastry-macaron.jpg",
      featured: false 
    },
    {
      id: 3,
      title: "Midnight Éclair",
      price: "$5.00",
      desc: "Rich chocolate glaze adorned with edible gold.",
      calories: "95 cal",
      img: "../src/assets/pastry-eclair.jpg",
      featured: true
    }
  ];

  return (
    <div className="pastries-page-wrapper">
      <Container className="py-5">
        
        <div className="text-center mb-5 mt-4">
          <h5 className="collection-subtitle">The Collection</h5>
          <h1 className="collection-title">Our Pastries</h1>
          <p className="collection-desc mx-auto">
            Each creation is a testament to our secret recipe.
          </p>
        </div>

        {/* Grid of 3 Highlights */}
        <Row className="g-4">
          {pastries.map((item) => (
            <Col lg={4} md={6} sm={12} key={item.id}>
              <Card className="pastry-card h-100">
                
                {/* Image Link */}
                <Link to={`/product/${item.id}`} className="text-decoration-none">
                  <div className="img-overflow-wrapper" style={{ cursor: 'pointer' }}>
                    {item.featured && (
                      <Badge bg="warning" text="dark" className="featured-badge">
                        ★ Featured
                      </Badge>
                    )}
                    <Card.Img variant="top" src={item.img} className="pastry-img" />
                  </div>
                </Link>

                <Card.Body className="d-flex flex-column p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    
                    {/* Title Link */}
                    <Link to={`/product/${item.id}`} className="text-decoration-none">
                      <Card.Title className="pastry-title mb-0 text-purple-hover" style={{ cursor: 'pointer' }}>
                        {item.title}
                      </Card.Title>
                    </Link>

                    <span className="pastry-price">{item.price}</span>
                  </div>
                  
                  <Card.Text className="pastry-desc text-muted flex-grow-1">
                    {item.desc}
                  </Card.Text>
                  
                  <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top-custom">
                    <span className="calories-badge">{item.calories}</span>
                    
                    {/* 3. BUTTON FUNCTIONALITY ADDED */}
                    <Button 
                      className="btn-add-cart" 
                      size="sm"
                      onClick={() => addToCart(item)} // <-- Yahan click par magic hoga
                    >
                      <i className="bi bi-bag"></i> Add to Cart
                    </Button>

                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* View Full Menu Button */}
        <div className="text-center mt-5">
          <Button 
            as={Link} 
            to="/menu" 
            className="btn-gold-menu" 
          >
            <span className="me-2">🍰</span> View Full Menu
          </Button>
        </div>

        {/* Gift Collections Section */}
        <div id="gift-collections" className="mt-5 pt-4">
          <GiftCollections />
        </div>

      </Container>
    </div>
  );
};

export default OurPastries;