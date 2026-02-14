import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // 1. Hook Import kiya
import './OurPastries.css'; 

const AllPastries = () => {
  const { addToCart } = useCart(); // 2. Hook se function nikala
  
  const fullMenu = [
    {
      id: 1,
      title: "Velvet Cream Puff",
      price: "$4.50",
      desc: "Our signature creation, filled with silky vanilla cream.",
      calories: "85 cal",
      img: "/assets/pastry-cream-puff.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Lavender Macaron",
      price: "$3.50",
      desc: "Delicate French macarons infused with Provence lavender.",
      calories: "65 cal",
      img: "/assets/pastry-macaron.jpg",
      featured: false 
    },
    {
      id: 3,
      title: "Midnight Éclair",
      price: "$5.00",
      desc: "Rich chocolate glaze adorned with edible gold.",
      calories: "95 cal",
      img: "/assets/pastry-eclair.jpg",
      featured: true
    },
    {
      id: 4,
      title: "Rose Petal Tart",
      price: "$6.00",
      desc: "Infused with organic rose water and topped with edible petals.",
      calories: "110 cal",
      img: "/assets/pastry-cream-puff.jpg", 
      featured: false
    },
    {
      id: 5,
      title: "Dark Forest Cake",
      price: "$7.50",
      desc: "Low-sugar dark chocolate layers with fresh cherries.",
      calories: "140 cal",
      img: "/assets/pastry-eclair.jpg", 
      featured: false
    },
    {
      id: 6,
      title: "Lemon Zest Drop",
      price: "$3.00",
      desc: "Zesty lemon curd in a delicate meringue shell.",
      calories: "55 cal",
      img: "/assets/pastry-macaron.jpg", 
      featured: true
    }
  ];

  return (
    <div className="pastries-page-wrapper" style={{ marginTop: '76px', minHeight: '100vh', backgroundColor: '#fcfcfc' }}>
      <Container className="py-5">
        
        {/* Header */}
        <div className="text-center mb-5">
          <h5 className="collection-subtitle">The Complete Menu</h5>
          <h1 className="collection-title">All Creations</h1>
          <p className="collection-desc mx-auto">
            Explore our full range of guilt-free indulgences.
          </p>
        </div>

        {/* Full Grid */}
        <Row className="g-4">
          {fullMenu.map((item) => (
            <Col lg={4} md={6} sm={12} key={item.id}>
              <Card className="pastry-card h-100">
                
                {/* Image Link */}
                <Link to={`/product/${item.id}`} className="text-decoration-none">
                  <div className="img-overflow-wrapper" style={{ cursor: 'pointer' }}>
                    {item.featured && (
                      <Badge bg="warning" text="dark" className="featured-badge">★ Featured</Badge>
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
                    
                    {/* 3. Button Click Event Added */}
                    <Button 
                      className="btn-add-cart" 
                      size="sm"
                      onClick={() => addToCart(item)} // <-- MAGIC HAPPENS HERE
                    >
                      <i className="bi bi-bag"></i> Add to Cart
                    </Button>

                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Back Button */}
        <div className="text-center mt-5">
           <Link to="/pastries" className="btn btn-outline-dark px-4 py-2" style={{ fontFamily: 'Montserrat', fontWeight: '500' }}>
             ← Back to Highlights
           </Link>
        </div>

      </Container>
    </div>
  );
};

export default AllPastries;