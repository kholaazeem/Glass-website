import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/GiftCollections.css'; // Design same rakhne ke liye

const Collections = () => {
  
  const allCollections = [
    {
      id: 1,
      title: "The Lovers' Box",
      desc: "An assortment of 12 pieces, perfect for romantic evenings.",
      price: "$45.00",
      tag: "Best Seller"
    },
    {
      id: 2,
      title: "Anniversary Collection",
      desc: "24 premium pieces with exclusive seasonal flavors.",
      price: "$85.00",
      tag: "Premium"
    },
    {
      id: 3,
      title: "Monthly Subscription",
      desc: "Fresh pastries delivered monthly for couples who crave more.",
      price: "From $35/month",
      tag: "Popular"
    },
    {
      id: 4,
      title: "The Proposal Set",
      desc: "Hidden ring compartment options with 6 gold-dusted éclairs.",
      price: "$120.00",
      tag: "Exclusive"
    },
    {
      id: 5,
      title: "Picnic Hamper",
      desc: "Includes pastries, sparkling juice, and a picnic blanket.",
      price: "$95.00",
      tag: "New"
    },
    {
      id: 6,
      title: "Tasting Flight",
      desc: "A sample of every flavor we offer (18 mini pieces).",
      price: "$60.00",
      tag: null
    }
  ];

  return (
    <div className="collections-page-wrapper" style={{ marginTop: '76px', minHeight: '100vh', backgroundColor: '#fcfcfc', paddingBottom: '80px' }}>
      
      {/* --- HEADER --- */}
      <div className="bg-white text-center py-5 mb-4">
        <Container className="animate-reveal delay-1">
          <h5 className="gift-subtitle text-gold mb-2" style={{ color: '#e2b34a' }}>Curated Gifting</h5>
          <h1 className="gift-title mb-3" style={{ color: '#2d1b4d' }}>All Collections</h1>
          <p className="mx-auto" style={{ maxWidth: '600px', fontFamily: 'Montserrat', color: '#666' }}>
            Whether it's a first date or a golden anniversary, we have curated the perfect 
            assortment to celebrate your unique love story.
          </p>
        </Container>
      </div>

      <Container>
        {/* --- GRID --- */}
        <Row className="g-4">
          {allCollections.map((item) => (
            <Col lg={4} md={6} sm={12} key={item.id}>
              
              {/* Card Styling bilkul waisi hi jaisi screenshot mein hai */}
              <div 
                className="gift-card text-center h-100 d-flex flex-column justify-content-center p-5"
                style={{ 
                  backgroundColor: '#3b255d', // Thora sa different purple taaki card lagay
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(45,27,77,0.15)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                
                {/* Badge (Optional) */}
                {item.tag && (
                  <span className="mb-3 mx-auto text-uppercase" style={{ 
                    color: '#e2b34a', 
                    fontSize: '0.75rem', 
                    letterSpacing: '1px', 
                    fontWeight: '700'
                  }}>
                    ★ {item.tag}
                  </span>
                )}

                {/* Title */}
                <h3 className="gift-card-title text-white mb-3" style={{ fontSize: '1.6rem' }}>
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="gift-card-desc text-white-50 mb-4" style={{ fontSize: '0.95rem' }}>
                  {item.desc}
                </p>
                
                {/* Price (GOLD COLOR - Same as screenshot) */}
                <div className="gift-price mt-auto" style={{ 
                  color: '#e2b34a', 
                  fontSize: '1.4rem', 
                  fontWeight: '700',
                  fontFamily: 'Montserrat'
                }}>
                  {item.price}
                </div>
                
              </div>
            </Col>
          ))}
        </Row>
        
        {/* Back Button */}
        <div className="text-center mt-5 pt-4">
           <Link to="/pastries" className="btn btn-outline-dark px-4 py-2" style={{ fontFamily: 'Montserrat', fontWeight: '500' }}>
             ← Back to Pastries
           </Link>
        </div>

      </Container>
    </div>
  );
};

export default Collections;