import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from '../assets/images/Rectangle 51.png';

const Section2 = () => {
  const style = {
    background: 'linear-gradient(to right, white, rgba(239, 143, 45, 1)',
  };

  return (
    <div>
      <Container fluid style={style}>
        <Row>
          <Col md={6} sm={12} className="text-right" style={{ marginTop: '20px' }}>
            <p style={{ fontFamily: 'Inter', color: 'black', fontSize: '4vw', fontWeight: 'bold' }}>
              Create your own Web3 Masterpiece
            </p>
            <p style={{ fontFamily: 'Inter', color: 'rgba(151, 151, 151, 1)', fontSize: '2vw' }}>
              Most entrepreneurs want to create their own web3 sites, unfortunately, they don't know much about creating one. Web3Makr makes it easier for newbies to create a blockchain-based collectibles solution without the hassle of leaving their favorite creation tools and by simple drag and drop functionality.
            </p>
            <Button variant="outline-primary" style={{ backgroundColor: '#8A2BE2', color: 'white', fontFamily: "Inter", width: '200px' }}>
              Start Building
            </Button>
          </Col>
          <Col md={6} sm={12} className="d-flex justify-content-center align-items-center" style={{ marginTop: '20px' }}>
            <img
              src={Image}
              alt=''
              className="img-fluid"
              style={{ margin: '20px' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section2;
