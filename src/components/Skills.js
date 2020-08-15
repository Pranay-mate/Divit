
import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import SkillBar from 'react-skillbars';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ScrollAnimation from 'react-animate-on-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Skills.css';


class Skills extends React.Component {
 render() {

   return (
     <div className=" text-center" id='skills'>
     <Container fluid>
         <Row>
            <Col xs={12} className=' text-center'>
            <h1>What my Spirit animal says about me</h1>

            </Col>
            <Col xs={6}  className=''>
            <div className=''>
            <p>about</p>

            </div>
            </Col>
           <Col xs={6}  className=''>
           <div className=''>
           <p>skills</p>

           </div>
           </Col>


         </Row>
       </Container>

     </div>
   );
 }
}

export default Skills;
