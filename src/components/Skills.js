
import React from "react";
import ReactDOM from "react-dom";
import SkillBar from 'react-skillbars';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ScrollAnimation from 'react-animate-on-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from "../components/chart.js";


import '../css/Skills.css';


const data = {
  labels: ['January', 'February', 'web developer', 'April', 'May', 'web developer', 'July', 'June', 'web developer', 'web developer'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: ['beginner', 'beginner', 'beginner', 'beginner', 'beginner', 'beginner', 'beginner', 'beginner', 'beginner', 'beginner']
    }
  ]
};
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
            <div className=''>
            <div id="text-main">
            <h1>What my Spirit animal says about me</h1>
          <p>  #Product Management, Product Design enthusiast</p>
        <p>    #Want to live upto my name’s meaning. “Divit” stands for Immortal.</p>
          <p>  #Lovetotravel #Foodie #Learningtocook #WanttobeIndependent</p>

            					</div>

            </div>
            </Col>
           <Col xs={12}  sm={7} className=''>
           <div className=''>

           <p>skills</p>
          <Chart chartData={this.state.chartData} redraw={true} lavel="HTML" LegendPosition="bottom" />
</div>
           </Col>


         </Row>
       </Container>

     </div>
   );
 }
}

export default Skills;
