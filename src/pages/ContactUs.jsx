import React from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import { Envelope, Telephone, GeoAlt } from 'react-bootstrap-icons'; // npm install react-bootstrap-icons
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page-wrapper py-5">
      <Container>
        
        {/* --- Header --- */}
        <div className="text-center mb-5 animate-reveal delay-1">
          <h5 className="section-subtitle">We'd Love to Hear From You</h5>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-desc mx-auto">
            Have questions about our pastries, orders, or special requests? Our team is here to 
            help make your experience magical.
          </p>
        </div>

        <Row className="g-4"> {/* g-4 Grid gap manage karega */}
          
          {/* --- LEFT COLUMN --- */}
          <Col lg={5} className="animate-reveal delay-2 d-flex flex-column">
            
            {/* Box 1: Get in Touch */}
            <div className="contact-info-box p-4 mb-4"> {/* mb-4 GAP ke liye zaroori hai */}
              <h4 className="box-title mb-4">Get in Touch</h4>
              
              <div className="d-flex mb-4">
                <div className="icon-wrapper me-3"> <Envelope size={22} /> </div>
                <div>
                  <h6 className="info-label mb-1">Email</h6>
                  <p className="info-text mb-0">hello@glasspastries.com</p>
                  <p className="info-text">orders@glasspastries.com</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="icon-wrapper me-3"> <Telephone size={22} /> </div>
                <div>
                  <h6 className="info-label mb-1">Phone</h6>
                  <p className="info-text mb-0">+1 (555) 123-4567</p>
                  <p className="info-text small text-muted">Mon-Fri: 9am - 6pm EST</p>
                </div>
              </div>

              <div className="d-flex">
                <div className="icon-wrapper me-3"> <GeoAlt size={22} /> </div>
                <div>
                  <h6 className="info-label mb-1">Shipping</h6>
                  <p className="info-text mb-0">We ship nationwide</p>
                  <p className="info-text small text-muted">Express delivery available</p>
                </div>
              </div>
            </div>

            {/* Box 2: FAQ (Ab ye upar walay box ke foran neeche ayega) */}
            <div className="faq-box p-4 flex-grow-1">
              <h4 className="box-title mb-4">Frequently Asked</h4>
              <ul className="faq-list ps-3">
                <li>How long do the pastries stay fresh?</li>
                <li>Do you accommodate dietary restrictions?</li>
                <li>What is your return policy?</li>
                <li>Can I customize my order?</li>
              </ul>
            </div>

          </Col>

          {/* --- RIGHT COLUMN (Form) --- */}
          <Col lg={7} className="animate-reveal delay-3">
            <div className="contact-form-box p-4 p-md-5">
              <h4 className="box-title mb-4">Send a Message</h4>
              
              <Form>
                <Row className="g-3 mb-3">
                  <Col md={6}>
                    <FloatingLabel controlId="formName" label="Name">
                      <Form.Control type="text" placeholder="Your name" className="form-input" />
                    </FloatingLabel>
                  </Col>
                  <Col md={6}>
                    <FloatingLabel controlId="formEmail" label="Email">
                      <Form.Control type="email" placeholder="name@example.com" className="form-input" />
                    </FloatingLabel>
                  </Col>
                </Row>

                <FloatingLabel controlId="formSubject" label="Subject" className="mb-3">
                  <Form.Control type="text" placeholder="Subject" className="form-input" />
                </FloatingLabel>

                <FloatingLabel controlId="formMessage" label="Message" className="mb-4">
                  <Form.Control as="textarea" placeholder="Message" style={{ height: '150px' }} className="form-input" />
                </FloatingLabel>

                <Button className="btn-send-message w-100 py-3" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;