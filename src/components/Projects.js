import React,{useState} from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'react-tabs/style/react-tabs.css';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Nav from 'react-bootstrap/Nav';

import Bat from '../images/badminton.jpeg';
import Bat1 from '../images/badminton1.jpg';
import Bat2 from '../images/badminton2.jpg';
import Netflix from '../images/Netflix.jpeg';
import Netflix1 from '../images/Netflix1.jpeg';
import Dance from '../images/dance.jpeg';
import Dance1 from '../images/dance1.jpg';

import EToilet from '../images/e-toilet-in-india.jpg';
import MeruVsOla from '../images/MeruVsOla.PNG';
import Onlinefurniture from '../images/Onlinefurniture.png';
import Flatmate from '../images/Flatmate.png';
import Redbus from '../images/redbus.png';
import Hotstar from '../images/hotstar.jpg';
import UserJourneyMap from '../images/userjourneymap.png';
import DoToday from '../images/DoToday.jpg';
import Zivame from '../images/zivame.png';
import Musicstreaming from '../images/musicstreaming.png';
import Zomato from '../images/Zomato.jpeg';
import Lyft from '../images/Lyft.jpg';
import HeadOut from '../images/headout.png';


import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel';

import '../css/Projects.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const { red, blue, green } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div

      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Projects () {

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

return (
  <div className='Projects'>
 <div className={classes.root}>
   <Paper  className='bar'>
     <Tabs
        className='Tabs-sm d-lg-none'
        value={value}
           onChange={handleChange}
           indicatorColor="primary"
           textColor="primary"
           variant="scrollable"
           scrollButtons="auto"
           aria-label="scrollable auto tabs example"

     >
       <Tab className='t' label="Engineering Final year project" {...a11yProps(0)} />
       <Tab label="Product Management Coursework" {...a11yProps(1)} />
       <Tab label="Product Design and Research Coursework" {...a11yProps(2)} />
     </Tabs>
     <Tabs
        className='Tabs-lg d-none d-lg-block'
        value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
          aria-label="full width tabs example"
      centered

     >
       <Tab label="Engineering Final year project" {...a11yProps(0)} />
       <Tab label="Product Management Coursework" {...a11yProps(1)} />
       <Tab label="Product Design and Research Coursework" {...a11yProps(2)} />
     </Tabs>
   </Paper>
   <SwipeableViews
     axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
     index={value}
     onChangeIndex={handleChangeIndex}
   >
     <TabPanel value={value} index={0} dir={theme.direction}>
     <CardDeck className='CardDeck-lg'>


       <Card>
         <Card.Img variant="top" className='im' src={EToilet} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
           <Card.Title className=''>Solar Powered Self-Cleaning Toilet</Card.Title>
           <Button variant="contained" color="secondary" onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1t5vnrZOHB14cP8t4_MIgorqegzzUKA6M/view?usp=sharing'}}>
  Details
</Button>
          </div>
         </Card.ImgOverlay>
       </Card>


     </CardDeck>

     </TabPanel>
     <TabPanel value={value} index={1} dir={theme.direction}>
     <CardDeck className='CardDeck-lg'>


       <Card>
         <Card.Img variant="top" className='im' src={MeruVsOla} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Competitor Analysis</Card.Title>
           <Card.Title className=''>Meru v/s Ola</Card.Title>
           <Button variant="contained" color="secondary" onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1eQc4nyGDbB0FP7GL2Vf0q_ThWdNasWi2/view?usp=sharing'}}>
  Details
</Button>
          </div>
         </Card.ImgOverlay>
       </Card>
       <Card>
         <Card.Img variant="top" className='im' src={Onlinefurniture} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Case studies</Card.Title>
           <Card.Title className=''>Online Furniture rental</Card.Title>
           <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1hnn7vJPCBUj3J_BzBZ4azyhOsv_aA0UT/view?usp=sharing'}}>
  Details
 </Button>
          </div>
         </Card.ImgOverlay>
       </Card>

       <Card>
         <Card.Img variant="top" className='im' src={Flatmate} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Case studies</Card.Title>
           <Card.Title className=''>Flatmate.in</Card.Title>
           <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1JPPRM_6BzjpVvkf8cFzrLPOJGABB2lCH/view?usp=sharing'}}>
  Details
</Button>
          </div>
         </Card.ImgOverlay>
       </Card>

     </CardDeck>

     <CardDeck className='CardDeck-lg'>


       <Card>
         <Card.Img variant="top" className='im' src={Redbus} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Case studies</Card.Title>
           <Card.Title className=''>Redbus</Card.Title>
           <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1SE7I8cfjEuFgwuMqyVHScyytnbhGeLgC/view?usp=sharing'}}>
  Details
</Button>
          </div>
         </Card.ImgOverlay>
       </Card>
       <Card>
         <Card.Img variant="top" className='im' src={Hotstar} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Case studies</Card.Title>
           <Card.Title className=''>Hotstar</Card.Title>
           <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1XIEgAg0F9osEJ5IC1IFZqxC_E8GWxMP3/view?usp=sharing'}}>
  Details
 </Button>
          </div>
         </Card.ImgOverlay>
       </Card>

       <Card>
         <Card.Img variant="top" className='im' src={UserJourneyMap} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>User Journey Maps</Card.Title>
           <Card.Title className=''>Buyonline</Card.Title>
           <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1399C5N2e5KatjSH8UKNibcCKbnFd62p6/view?usp=sharing'}}>
  Details
</Button>
          </div>
         </Card.ImgOverlay>
       </Card>

     </CardDeck>

     <CardDeck className='CardDeck-lg'>



       <Card>
         <Card.Img variant="top" className='im' src={DoToday} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Sketch, Wireframes and Prototypes</Card.Title>
           <Card.Title className=''>DoToday</Card.Title>
           <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1mQ3iSxNFVbyUj3vMfhuIl3b-6CgeY2nG/view?usp=sharing'}}>
  Details
 </Button>
          </div>
         </Card.ImgOverlay>
       </Card>
       <Card>
         <Card.Img variant="top" className='im' src={Zivame} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Industry Project</Card.Title>
           <Card.Title className=''>Zivame</Card.Title>
           <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1EtWVbQnragHUbCA8yYRDlMRFeyIKm7et/view?usp=sharing'}}>
  Details
 </Button>
          </div>
         </Card.ImgOverlay>
       </Card>
       <Card>
         <Card.Img variant="top" className='im' src={Musicstreaming} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Blogs</Card.Title>
           <Card.Title className=''>Product Adoption lifecycle for Music streaming services</Card.Title>
           <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1_s68PXl21gDcvIoW77sy2xj0ab3tDBjj/view?usp=sharing'}}>
      Details
      </Button>
          </div>
         </Card.ImgOverlay>
       </Card>


     </CardDeck>
     <CardDeck className='CardDeck-lg'>



       
       <Card>
         <Card.Img variant="top" className='im' src={Zomato} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Blogs</Card.Title>

           <Card.Title className=''>Agile Methodology in Zomato</Card.Title>
           <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1EtWVbQnragHUbCA8yYRDlMRFeyIKm7et/view?usp=sharing'}}>
  Details
</Button>
          </div>
         </Card.ImgOverlay>
       </Card>

     </CardDeck>






     </TabPanel>
     <TabPanel value={value} index={2} dir={theme.direction}>
     <CardDeck className='CardDeck-lg'>


       <Card>
         <Card.Img variant="top" className='im' src={Lyft} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Business Model canvas and Value Proposition cavas</Card.Title>
           <Card.Title className=''>Lyft</Card.Title>
           <Button variant="contained" color="secondary" onClick={(e)=>{window.location.href='https://drive.google.com/file/d/10KgQKMxkhv1MZq3Y-_ukVbDssdPK5CVN/view?usp=sharing'}}>
  Details
</Button>
          </div>
         </Card.ImgOverlay>
       </Card>
       <Card>
         <Card.Img variant="top" className='im' src={HeadOut} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
         <Card.Title className=''>Product Ceitique</Card.Title>
           <Card.Title className=''>HeadOut</Card.Title>
           <Button variant="contained" color="secondary"  onClick={(e)=>{window.location.href='https://drive.google.com/file/d/1AVYTT_9CkO7e_E-xThEajtVTm_Z9Stzd/view?usp=sharing'}}>
  Details
 </Button>
          </div>
         </Card.ImgOverlay>
       </Card>



     </CardDeck>
     </TabPanel>
   </SwipeableViews>
   </div>
 </div>
);
}

export default Projects;
