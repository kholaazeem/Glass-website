import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // 1. Link Import kiya
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <Container>
        <div className="cta-content text-center">
          
          {/* Gift Icon */}
          <div className="gift-icon mb-3">
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#e2b34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 12 20 22 4 22 4 12"></polyline>
              <rect x="2" y="7" width="20" height="5"></rect>
              <line x1="12" y1="22" x2="12" y2="7"></line>
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
            </svg>
          </div>
          
          {/* Heading & Text */}
          <h2 className="cta-heading mb-3">Begin Your Indulgent Journey</h2>
          <p className="cta-text mb-4">
            Experience the mystery and romance of Glass pastries. Order today and 
            discover why couples across the nation are falling in love with our secret 
            recipe creations.
          </p>
          
          {/* Buttons Linked */}
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            
           {/* Button 1: Explore -> Pastries Page ke Gift Section par */}
<Button 
  as={Link} 
  to="/pastries#gift-collections"  // <-- Ye change kiya hai (# add kiya)
  className="btn-gold-cta"
>
  Explore Our Collection
</Button>
            
            {/* 3. Button 2: Get in Touch -> Contact Page */}
            <Button 
              as={Link} 
              to="/contact" 
              className="btn-outline-cta"
            >
              Get in Touch
            </Button>
            
          </div>

        </div>
      </Container>
    </section>
  );
};

export default CtaSection;