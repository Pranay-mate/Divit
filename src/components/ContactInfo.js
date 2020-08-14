import React from 'react';
import mine from '../images/mine.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Typist from 'react-typist';

import '../css/ContactInfo.css';

function ContactInfo() {
  return (
    <div className="ContactInfo container-fluid">

  <Container>
  <Row className="" >
  <Col xs={4}   className="">
  <h1>Contact Info</h1>
  </Col>
    <Col xs={4}  className="icon  text-center">
          <a href="https://www.linkedin.com/in/divitkarmiani/"><img src="https://img.icons8.com/ios/40/ffffff/linkedin.png" alt='loading..' /></a>
          <a href="mailto:divitkarmiani1998@gmail.com"><img src="https://img.icons8.com/ios/47/ffffff/gmail.png" alt='loading..' /></a>
          <a href="https://medium.com/@divitkarmiani1998"><img src="https://img.icons8.com/ios/40/ffffff/medium-monogram.png" alt='loading..' /></a>

    </Col>
    <Col xs={4}   className="call  text-center">
    <img src="https://img.icons8.com/android/25/ffffff/phone-disconnected.png" alt='loading..' />
    <span style={{color: 'white'}}>Phone:</span>
    <h6 style={{color: 'white'}}>+91-9892302788</h6>
    </Col>


  </Row>
    </Container>
    </div>
  );
}

export default ContactInfo;
