import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from '../assets/images/Mask group.png';

const Footer = () => {
  return (
    <div>
      <Container fluid style={{ background: 'linear-gradient(to right, darkblue, black)' }}>
        <Row>
          <Col md={12} className="text-center">
            <img src={Image} alt='' className="img-fluid" />
          </Col>
          <Col md={12} sm={12} className="d-flex justify-content-center align-items-center mb-4" style={{ marginTop: "20px" }}>
            <span style={{ color: 'white', marginRight: '30px', fontFamily: "Inter" }}>Web3Makr</span>
            <span style={{ color: 'white', marginRight: '30px', fontFamily: "Inter" }}>White paper</span>
            <span style={{ color: 'white', marginRight: '30px', fontFamily: "Inter" }}>Services</span>
            <span style={{ color: 'white', marginRight: '30px', fontFamily: "Inter" }}>Tool</span>
            <span style={{ color: 'white', fontFamily: "Inter" }}>Contact us</span>
          </Col>
          <Col md={6} sm={12}>
            <p style={{ fontFamily: 'Inter', color: 'white' }}>
              Copyright 2022 © Web3makr
            </p>
          </Col>
          <Col md={6} sm={12} className="d-flex justify-content-end align-items-center">
            <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', fontSize: '24px', marginRight: '10px' }} />
            <FontAwesomeIcon icon={faFacebook} style={{ color: 'white', fontSize: '24px', marginRight: '10px' }} />
            <FontAwesomeIcon icon={faTwitter} style={{ color: 'white', fontSize: '24px' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
