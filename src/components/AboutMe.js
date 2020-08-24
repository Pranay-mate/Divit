
import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from "../components/chart.js";
import Image from 'react-bootstrap/Image';
import macaque from '../images/macaques.png';
import Card from 'react-bootstrap/Card';

import '../css/AboutMe.css';


class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }



 render() {

   return (
     <div className="" id='skills'>

     <Container fluid>
         <Row>
            <Col xs={12}  sm={5} className='about'>
            <div id="text-main">
            <Container  style={{padding:'0px', margin:'0px'}}>
                <Row style={{padding:'0px', margin:'0px'}}>
                   <Col xs={4}  className='macaqueImg'>
                   <Image className='macaque img-fluid' src={macaque}  alt='loading..' />
                       </Col>
                  <Col xs={8}  className='text-left' style={{padding:'0px', margin:'0px'}}>
                  <h1>  What my Spirit animal says about me</h1>
                  </Col>
                </Row>
              </Container>


<Card className="aboutpara" height=''>
  <Card.Body>

      <div className=''>
    <p>Divit may be a difficult person to deal with, but if you ask his friends, they will say he is the one to keep close and that they wouldn’t change a thing about him. His goal in life is to fulfill the meaning of his name – “Immortal”, by making a place in the heart of people he cares about. Becoming independent and living life on his own terms has become his passion. Coming to what he likes, Product Management is his new found ecstasy, and something he dearly wants to succeed in.</p>
    <p> I can go on and on about him, but I think that’s enough about Divit, let’s be modest. Ahh like Divit is of course!</p>

                </div>
                </Card.Body>

  </Card>

            </div>
            </Col>
           <Col xs={12}  sm={7} className=''>
           <div className='Skills'>
            <h1 className='text-center'>Skills</h1>
          <Chart chartData={this.state.chartData}  lavel="HTML" LegendPosition="bottom" />
</div>
           </Col>


         </Row>
       </Container>

     </div>
   );
 }
}

export default Skills;
