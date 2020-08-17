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
   <AppBar position="static" color="default">
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
   </AppBar>
   <SwipeableViews
     axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
     index={value}
     onChangeIndex={handleChangeIndex}
   >
     <TabPanel value={value} index={0} dir={theme.direction}>
     <CardDeck className='CardDeck-lg'>


       <Card>
         <Card.Img variant="top" className='im' src={Dance} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
           <Card.Title className=''>Card title</Card.Title>
           <Button variant="contained" color="secondary">
  Details
</Button>
          </div>
         </Card.ImgOverlay>
       </Card>
       <Card>
         <Card.Img variant="top" className='im' src={Netflix} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
           <Card.Title className=''>Card title</Card.Title>
           <Button variant="contained" color="secondary">
  Details
 </Button>
          </div>
         </Card.ImgOverlay>
       </Card>

       <Card>
         <Card.Img variant="top" className='im' src={Dance} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
           <Card.Title className=''>Card title</Card.Title>
           <Button variant="contained" color="secondary">
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
         <Card.Img variant="top" className='im' src={Dance} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
           <Card.Title className=''>Card title</Card.Title>
           <Button variant="contained" color="secondary">
  Details
</Button>
          </div>
         </Card.ImgOverlay>
       </Card>
       <Card>
         <Card.Img variant="top" className='im' src={Netflix} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
           <Card.Title className=''>Card title</Card.Title>
           <Button variant="contained" color="secondary">
  Details
 </Button>
          </div>
         </Card.ImgOverlay>
       </Card>

       <Card>
         <Card.Img variant="top" className='im' src={Dance} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
           <Card.Title className=''>Card title</Card.Title>
           <Button variant="contained" color="secondary">
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
         <Card.Img variant="top" className='im' src={Dance} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
           <Card.Title className=''>Card title</Card.Title>
           <Button variant="contained" color="secondary">
  Details
</Button>
          </div>
         </Card.ImgOverlay>
       </Card>
       <Card>
         <Card.Img variant="top" className='im' src={Netflix} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
           <Card.Title className=''>Card title</Card.Title>
           <Button variant="contained" color="secondary">
  Details
 </Button>
          </div>
         </Card.ImgOverlay>
       </Card>

       <Card>
         <Card.Img variant="top" className='im' src={Dance} alt='loading..' />

         <Card.ImgOverlay >
         <div className='card-ImgOverlay'>
           <Card.Title className=''>Card title</Card.Title>
           <Button variant="contained" color="secondary">
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
