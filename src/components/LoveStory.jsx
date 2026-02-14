import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LoveStory.css';

const LoveStory = () => {
  return (
    <section className="story-section">
      <Container>
        <Row className="align-items-center g-4"> {/* g-4 se items me gap ayega */}
          
          {/* 1. Image Column */}
          {/* Mobile (xs) par 12 columns (full width), Desktop (lg) par 6 columns */}
          <Col lg={6} md={12} sm={12} xs={12} className="mb-4 mb-lg-0">
            <div className="image-wrapper animate-reveal delay-1">
              <img 
                src="/assets/couple-moment.jpg" 
                alt="Couple sharing a moment" 
                className="img-fluid story-img"
              />
            </div>
          </Col>

          {/* 2. Text Column */}
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className="text-content ps-lg-5 animate-reveal delay-2">
              <h5 className="story-subtitle">For Those Who Share</h5>
              <h2 className="story-title">Every Bite Tells a Love Story</h2>
              
              <p className="story-text">
                At Glass, we believe that the sweetest moments in life are meant to be shared. 
                Our pastries aren't just desserts—they're vessels of connection, crafted to bring 
                couples closer over whispered secrets and stolen glances.
              </p>
              
              <p className="story-text">
                Each creation carries the mystery of our heritage and the romance of old-world 
                craftsmanship, wrapped in the comfort of knowing you're indulging wisely.
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default LoveStory;