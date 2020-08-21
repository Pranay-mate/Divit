import React from 'react';
import mine from '../images/mine.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import medium from '../images/medium_b.png';
import linkedin from '../images/linkedin_b.png';
import gmail from '../images/gmail.png';

import Typist from 'react-typist';

import '../css/ContactInfo.css';

function ContactInfo() {
  return (
    <div className="ContactInfo container-fluid text-center">

  <Container>
  <Row className="" >
  <Col xs={12} lg={3}  className="text-left">
  </Col>
    <Col xs={12} lg={6}  className="text-center">
    <a href="https://www.linkedin.com/in/divitkarmiani/"><img src={linkedin}  className='icon-foot mx-1 rounded-circle'   alt='loading..' /></a>
    <a href="mailto:divitkarmiani1998@gmail.com"><img src={gmail}  className='icon-footer mx-1 rounded-circle '  alt='loading..' /></a>
    <a href="https://medium.com/@divitkarmiani1998"><img src={medium}  className='icon-footer mx-1 rounded-circle'  alt='loading..' /></a>

    </Col>
    <Col xs={12} lg={3}   className="call  text-center">
    <h1>Divit Karmiani</h1>
    </Col>


  </Row>
    </Container>
    </div>
  );
}

export default ContactInfo;
