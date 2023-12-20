import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image1 from '../assets/images/Group 61.png';
import Image2 from '../assets/images/Group 62.png';
import Image3 from '../assets/images/Group 63.png';
import Image4 from '../assets/images/Group 64.png';
import Image5 from '../assets/images/Group 65.png';
import Image6 from '../assets/images/Group 66.png';

const Future = () => {
  const buttonStyle = {
    fontFamily: 'Inter',
    color: 'white',
    fontSize: '2vw',
    marginTop: '10vh',
    backgroundColor: 'transparent', // Set the background color to transparent
    border: '1px solid white', // Add a border
    padding: '10px 20px', // Adjust padding as needed
    cursor: 'pointer',
  };

  return (
    <div>
      <Container fluid style={{ background: 'black' }}>
        <Row>
          <Col md={12} sm={12} className="text-center">
            <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '5vw', fontWeight: 'bold' }}>
              The Future of Web3 NoCode
            </p>
          </Col>
          <Col md={12} sm={12} className="text-center">
            <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '2vw' }}>
              Web3Makr allows you to incorporate top-ranked blockchain platforms
            </p>
          </Col>

          <Col md={12} sm={12} className="text-center">
            <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '2vw' }}>
              into your work through the drag and drop feature.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12} className="text-center">
            <Button style={buttonStyle}>Multi-chain</Button>
            <br></br>
            <Button style={buttonStyle}>Dashboard</Button>
            <br></br>
            <Button style={buttonStyle}>Tool</Button>
          </Col>
          <Col md={3} sm={12}>
            <img src={Image1} alt='' className="img-fluid" />
          </Col>
          <Col md={3} sm={12}>
            <img src={Image2} alt='' className="img-fluid" />
          </Col>
          <Col md={3} sm={12}>
            <img src={Image3} alt='' className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12} className="text-center">

          </Col>
          <Col md={3} sm={12}>
            <img src={Image4} alt='' className="img-fluid" />
          </Col>
          <Col md={3} sm={12}>
            <img src={Image5} alt='' className="img-fluid" />
          </Col>
          <Col md={3} sm={12}>
            <img src={Image6} alt='' className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Future;
