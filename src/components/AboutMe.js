import React from 'react';
import mine from '../images/mine.jpg';
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
         <Col xs={12} sm={5} className=' text-center'>
          <Image className='mine img-fluid' src={mine} roundedCircle  alt='loading..' />
        </Col>
        <Col xs={12}  sm={7} className=''>
        <div className='AboutText'>
        <p>WELCOME TO MY WORLD</p>

        <h1>Hi, I’m Jone Doe</h1>
        <Typist cursor={{ hideWhenDone: true }}>
        <span>Content Writter.</span>
        </Typist>
        <h1>based in USA.</h1>
        </div>
        </Col>


      </Row>
    </Container>
    </div>
  );
}

export default AboutMe;
