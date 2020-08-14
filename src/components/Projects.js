import React,{useState} from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';

import Carousel from 'react-bootstrap/Carousel';
import Multi from './multiCaurosal';

import '../css/Projects.css';


function Projects() {
  const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};
let c;
let a;
let b;
  if (index===0) {

    a = <h1>Engineering Final year project</h1>
  }else if(index===1){
    b = <h1>Project Management Coursework</h1>

  }else{
    c = <h1>Product Design and Reasearch Coursework</h1>

  }


  return (
    <div className="Projects text-center ">
    <Tabs>
    <TabList className='TabList text-left' style={{ backgroundColor:'grey' }}>
      <Tab id='Tab1' >Engineering Final year project</Tab>
      <Tab id='Tab2' >Project Management Coursework</Tab>
      <Tab id='Tab3' >Product Design and Reasearch Coursework</Tab>
    </TabList>

    <TabPanel>
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>

            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Item>
        <Carousel.Item>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Item>
        <Carousel.Item>

            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Item>
      </Carousel>
    </TabPanel>
    <TabPanel>
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>

            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Item>
        <Carousel.Item>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Item>
        <Carousel.Item>

            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Item>
      </Carousel>
    </TabPanel>
    <TabPanel>
    <Carousel className='text-center'>
  <Carousel.Item>


      <p className="reviewer_name" >fsfsfcs</p>
      <h2>svjksnvjkc </h2>
      <p className='review_lines'>svkjsnsdkjcn</p>

  </Carousel.Item>
  <Carousel.Item>


      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Item>
  <Carousel.Item>

      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Item>
  </Carousel>
    </TabPanel>
  </Tabs>
    </div>
  );
}

export default Projects;
