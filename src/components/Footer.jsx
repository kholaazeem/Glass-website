import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-main">
      <Container>
        
        {/* Main Links Section */}
        <div className="footer-links-area">
          <Row className="g-4">
            
            {/* Brand Column */}
            <Col lg={5} md={12} className="mb-4 mb-lg-0 text-center text-lg-start">
              <h3 className="footer-brand mb-3">Glass</h3>
              <p className="footer-desc mx-auto mx-lg-0">
                Crafted with love and a secret recipe passed down through generations. 
                Low-calorie indulgence for couples who cherish the finer moments.
              </p>
            </Col>

            {/* Links Column */}
            <Col lg={3} md={6} sm={6} className="offset-lg-1 text-center text-lg-start">
              <h5 className="footer-title">Explore</h5>
              <ul className="list-unstyled footer-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#pastries">Our Pastries</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </Col>

            {/* Contact Column */}
            <Col lg={3} md={6} sm={6} className="text-center text-lg-start">
              <h5 className="footer-title">Get in Touch</h5>
              <ul className="list-unstyled footer-contact">
                <li>hello@glasspastries.com</li>
                <li>+1 (555) 123-4567</li>
                <li className="text-gold mt-2">Ships nationwide</li>
              </ul>
            </Col>
            
          </Row>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom mt-5 pt-3 pb-3">
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="copyright mb-0">&copy; 2026 Glass Pastries. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <p className="made-with mb-0">
                Made with <span style={{color: '#e2b34a'}}>♥</span> for couples
              </p>
            </Col>
          </Row>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;