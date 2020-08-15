import React from 'react';
import mine from '../images/mine.jpg';
import minew from '../images/minew.jpg';
import mineg from '../images/mineg.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Typist from 'react-typist';

import '../css/AboutMe.css';

function AboutMe() {
  return (
    <div className="AboutMe container-fluid ">
  <Container>
      <Row>
         <Col xs={12} sm={4} className=' text-center'>
          <Image className='mine img-fluid' src={mineg} roundedCircle  alt='loading..' />
        </Col>
        <Col xs={12}  sm={8} className=''>
        <div className='AboutText'>
        <p>WELCOME TO MY WORLD</p>

        <h1 className='mb-1'>Hi, I’m Divit Karmiani</h1>
        <Typist cursor={{ hideWhenDone: true }}>
        <span className=''>DevOps Engineer.</span>
        </Typist>
        <h1 className=''>based in Mumbai, INDIA.</h1>
        <a className='ml-1' href="https://www.linkedin.com/in/divitkarmiani/"><img src="https://img.icons8.com/ios/40/000000/linkedin.png" alt='loading..' /></a>
        <a className='ml-1' href="mailto:divitkarmiani1998@gmail.com"><img src="https://img.icons8.com/ios/47/000000/gmail.png" alt='loading..' /></a>
        <a className='ml-1' href="https://medium.com/@divitkarmiani1998"><img src="https://img.icons8.com/ios/40/000000/medium-monogram.png" alt='loading..' /></a>

        </div>

        </Col>


      </Row>
    </Container>
    </div>
  );
}

export default AboutMe;
