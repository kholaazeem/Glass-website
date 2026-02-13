// File: src/components/SecretSection.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SecretSection.css'; // Make sure ye css file bhi ho, ya is line ko hata den

const SecretSection = () => {
  return (
    <section className="secret-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={12}>
            <div className="secret-box text-center">
              <h2 className="secret-title">The Secret Behind Glass</h2>
              <p className="secret-text">
                Our recipes have been guarded for over a century, refined across generations. The 
                exact methods and ingredients remain a closely held family secret—what we can 
                share is that every pastry is crafted with precision, passion, and an unwavering 
                commitment to delivering joy without compromise.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SecretSection;