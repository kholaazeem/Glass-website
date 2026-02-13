import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // 1. Link Import kiya
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-main-wrapper">
      <Container fluid="lg" className="h-100 position-relative z-2">
        <div className="row h-100 align-items-center">
          <div className="col-lg-7 col-md-10 text-start content-box">
            
            {/* ANIMATIONS */}
            <h5 className="sub-heading mb-3 animate-reveal delay-1">
              A Secret Worth Sharing
            </h5>
            
            <h1 className="main-title mb-4 animate-reveal delay-2">
              Glass
            </h1>
            
            <p className="description mb-5 animate-reveal delay-3">
              Exquisite low-calorie pastries crafted from a time-honored secret recipe. 
              Delivered to your door, perfect for sharing intimate moments together.
            </p>
            
            <div className="d-flex gap-3 animate-reveal delay-4">
              
              {/* 2. Button 1: Discover -> Pastries Page */}
              <Button 
                as={Link} 
                to="/pastries" 
                className="btn-gold"
              >
                Discover Our Pastries <span className="ms-2">→</span>
              </Button>
              
              {/* 3. Button 2: Contact -> Contact Page */}
              <Button 
                as={Link} 
                to="/contact" 
                className="btn-outline-gold"
              >
                Contact Us
              </Button>

            </div>

          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="scroll-indicator animate-reveal delay-5">
         <div className="mouse">
           <div className="wheel"></div>
         </div>
      </div>
    </div>
  );
};

export default Hero;