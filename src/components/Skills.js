
import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import SkillBar from 'react-skillbars';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ScrollAnimation from 'react-animate-on-scroll';

import '../css/Skills.css';


class Skills extends React.Component {
 render() {

   return (
     <div className="Container-fluid text-center" id='skills'>
     <ScrollAnimation animateIn='flipInY'>
     <h1>Skills</h1>
     </ScrollAnimation>
     <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
     <Chart
     className='Chart'
     width={'100%'}
     height={'400px'}
     chartType="Bar"
     loader={<div>Loading Chart</div>}
     data={[

       ['Skills', 'skills'],
       ['Product Management','Beginner'],
       ['Market research','Beginner'],
       ['Shell scripting','Intermediate'],
       ['Jenkins','Beginner'],
       ['Docker','Intermediate'],
       ['Ansible','Intermediate'],
       ['Python','Intermediate'],
       ['Java','Intermediate'],
       ['C++', 'Intermediate'],
       ['C', 'Intermediate',],


     ]}
     options={{
     // Material design options
     chart: {
     title: 'Skills',
     title: { Width: '5%' },
     },
     colors: ['rgb(33, 150, 243)', '#ffab91'],

     axes: {
      y: {
        0: { side: 'right' },
      },
     },
     bars: 'horizontal',
     bar: { groupWidth: '95%' },
     legend: { position: 'none' },

     }}
     // For tests
     />

</ScrollAnimation>

     </div>
   );
 }
}

export default Skills;
