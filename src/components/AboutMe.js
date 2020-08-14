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
    <div className="AboutMe container-fluid">

  <Container>
      <Row>
         <Col xs={4} className='justify-content-center'>
          <Image className='mine img-fluid' src={mine} roundedCircle  alt='loading..' />
        </Col>
        <Col xs={8} className='AboutText' >
        <h5>WELCOME TO MY WORLD</h5>
        <h1 style={{ 'margin-bottom':'0px','padding-bottom':'0px' }}>Hi, I’m <span>Divit Karmiani</span></h1>

        <Typist cursor={{ hideWhenDone: true }} style={{ 'margin-top':'0px','padding-top':'0px' }}>
        DevOps Engineer
        </Typist>

        <p >Currently working as Devops Engineer at Amadeus Software Labs.</p>
        <p>Expertise in various technologies like Docker, Jenkins, Ansible, Python, Shell etc</p>
        <p>Product Management, Product Design enthusiast</p>
        <p>#Want to live upto my name’s meaning. “Divit” stands for Immortal.</p>
        <p>#Lovetotravel #Foodie #Learningtocook #WanttobeIndependent</p>

        <a href="https://drive.google.com/file/d/145TSumFN7G2oYIEu51QlYh0LJ9poCJqo/view?usp=sharing">  <button type="button" class="btn btn-dark">Resume</button></a>

        </Col>


      </Row>
    </Container>
    </div>
  );
}

export default AboutMe;
