import React from 'react';

import Bat from '../images/badminton.jpeg';
import Bat1 from '../images/badminton1.jpg';
import Bat2 from '../images/badminton2.jpg';
import Netflix from '../images/Netflix.jpeg';
import Netflix1 from '../images/Netflix1.jpeg';
import Dance from '../images/dance.jpeg';
import Dance1 from '../images/dance1.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactCardFlip from 'react-card-flip';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import ScrollAnimation from 'react-animate-on-scroll';

import '../css/interests.css';



class Interests extends React.Component {
  constructor() {
    super();
      this.state = {
        isFlippedN: false,
        isFlippedT: false,
        isFlippedF: false,
        isFlippedC: false
    };
  }



  render() {

  const skills = [
    {type: "English", level: 75},
    {type: "Hindi", level: 100},
    {type: "Marathi", level: 100},

  ];
  const colors = {
  "bar": "#3498db",
  "title": {
    "text": "#fff",
    "size":"500px",
    "background": "#2980b9"
  }
};

  return (
    <div className="Interests  text-center">
    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
    <Container>

        <Row>
          <Col xs={12} className='interests'>

            <ScrollAnimation delay={1000}
            animateIn='tada'
            initiallyVisible={true}>
            <h1>Interests</h1>

            </ScrollAnimation>
            <h5>What I like</h5>
            
            </Col>
        </Row>


        </Container>
            <CardDeck>


              <Card>
              <ReactCardFlip isFlipped={this.state.isFlippedN} flipDirection="horizontal">
                <Card.Img variant="top" className='im' src={Dance} onMouseOver={() => {this.setState({isFlippedN: true})}} onClick={() => {this.setState({isFlippedN: true})}} alt='loading..' />
                <div>
                <Card.Img variant="top" className='im' src={Dance1} onMouseOut={() => {this.setState({isFlippedN: false})}} onClick={() => {this.setState({isFlippedN: false})}} alt='loading..' />

                </div>
              </ReactCardFlip>
                <Card.Footer>
                  <small className="text-muted">Dancing</small>
                </Card.Footer>
              </Card>
              <Card>
              <ReactCardFlip isFlipped={this.state.isFlippedT} flipDirection="horizontal">
                <Card.Img variant="top" className='im' src={Bat1} onMouseOver={() => {this.setState({isFlippedT: true})}} onClick={() => {this.setState({isFlippedT: true})}} alt='loading..' />
                <div>
                <Card.Img variant="top" className='im' src={Bat2} onMouseOut={() => {this.setState({isFlippedT: false})}} onClick={() => {this.setState({isFlippedT: false})}} alt='loading..' />

                </div>
              </ReactCardFlip>
                <Card.Footer>
                  <small className="text-muted">Badminton</small>
                </Card.Footer>
              </Card>
              <Card>
                <ReactCardFlip isFlipped={this.state.isFlippedF} flipDirection="horizontal">
                  <Card.Img variant="top" className='im' src={Netflix} onMouseOver={() => {this.setState({isFlippedF: true})}} onClick={() => {this.setState({isFlippedF: true})}} alt='loading..' />
                  <div>
                  <Card.Img variant="top" className='im' src={Netflix1} onMouseOut={() => {this.setState({isFlippedF: false})}} onClick={() => {this.setState({isFlippedF: false})}} alt='loading..' />

                  </div>
                </ReactCardFlip>
                <Card.Footer>
                  <small className="text-muted">Binge watching Netflix</small>
                </Card.Footer>
              </Card>

            </CardDeck>
    </ScrollAnimation>



    </div>
  );
}
}

export default Interests;
