import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Image from '../assets/images/Mockup.png';

const Herosection = () => {
  const style = {
    background: 'linear-gradient(to right, rgba(24, 173, 228, 1), rgba(239, 143, 45, 1), rgba(170, 88, 170, 1))',
    // Add other styles as needed
  };

  const circleStyle = {
    borderRadius: '60%',
    backgroundColor: 'red', // Set the background color to red
    padding: '20px',
    display: 'inline-block',
  };

  return (
    <Container fluid style={style}>
      <Row className="d-flex align-items-center">
        <Col md={12} className="text-center">
          <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '5vw' ,fontWeight: 'bold' }}>
            Web3Makr Redefining
          </p>
        </Col>
        <Col md={12} className="text-center">
          <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '5vw',fontWeight: 'bold'  }}>
            How You Create
          </p>
        </Col>
        <Col md={12} className="text-center">
          <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '2vw' }}>
            Unlock the blockchain potential to create
          </p>
        </Col>
        <Col md={12} className="text-center">
          <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '2vw' }}>
            Web3 Applications
          </p>
        </Col>
        <Col md={12} className="text-center">
          <div style={circleStyle}>
            <FontAwesomeIcon icon={faPlay} style={{ color: 'white', fontSize: '4vw' }} />
          </div>
        </Col>
        <Col md={12} className="text-center">
          <img src={Image} alt='' className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Herosection;
