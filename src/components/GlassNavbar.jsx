import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import './GlassNavbar.css';

const GlassNavbar = () => {
  const location = useLocation();
  const { cartItems, toggleCart } = useCart();

  return (
    <Navbar expand="lg" className="bg-white py-3 shadow-sm fixed-top">
      <Container fluid="lg">
        <Navbar.Brand as={Link} to="/" className="brand-logo text-purple">
          Glass
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto align-items-center gap-4">
            
            <Nav.Link as={Link} to="/" className={`nav-custom ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Nav.Link>
            
            <Nav.Link as={Link} to="/pastries" className={`nav-custom ${location.pathname === '/pastries' ? 'active' : ''}`}>
              Our Pastries
            </Nav.Link>
            
            <Nav.Link as={Link} to="/contact" className="nav-custom">
              Contact
            </Nav.Link>

            {/* Cart Icon Section */}
            <div 
              className="position-relative d-flex align-items-center" 
              style={{ cursor: 'pointer', color: '#2d1b4d' }}
              onClick={toggleCart}
            >
              <i className="bi bi-bag" style={{ fontSize: '1.4rem' }}></i>
              
              {/* Badge Counter */}
              {cartItems.length > 0 && (
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '0.6rem', border: '2px solid white' }}
                >
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </div>
            
            <Button 
              as={Link} 
              to="/pastries" 
              className="btn-purple"
            >
              Order Now
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlassNavbar;