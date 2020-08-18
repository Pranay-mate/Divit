import React from 'react';
import Container from 'react-bootstrap/Container';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import ScrollAnimation from 'react-animate-on-scroll';

import 'react-vertical-timeline-component/style.min.css';

import '../css/experience.css';

function Experience() {
  return (
    <div className="Experience text-center">
    <h1>Experience</h1>

  <Timeline lineColor={'#ddd'}>

    <TimelineItem
      key="001"
      dateText="07/2019 – Present"
      dateInnerStyle={{ background: '#e86971' , color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#61b8ff' }}>Amadeus Software Labs</h3>
      <h4 style={{ color: '#61b8ff' }}>DevOps Engineer</h4>
      <p>
      - Responsible for automating manual tasks and processes
      </p>
      <p>
      - Working on migration of in-house applications to cloud
      </p>
      <p>
      - Technologies: Python, Ansible, Shell scripting, Jenkins, Docker
      </p>
    </TimelineItem>
    <TimelineItem
      key="002"
      dateText="06/2020 – Present"
      dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#e86971' }}>upGrad</h3>
      <h4 style={{ color: '#e86971'}}>Evangelist</h4>
      <p>
      - Counseling leads
      </p>
      <p>
      - Promoting programs developed and offered by upGrad
      </p>
    </TimelineItem>
    <TimelineItem
      key="058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW"
      dateText="06/2019 – 05/2020"
      dateInnerStyle={{ background: '#e86971' , color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#61b8ff' }}>Neebal Technologies</h3>
      <h4 style={{ color: '#61b8ff' }}>Teacher</h4>
      <p>
      - Teaching programming languages like C, C++ and Java
      </p>

    </TimelineItem>
    <TimelineItem
      key="004"
      dateText="07/2018 – 03/2019"
      dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#e86971' }}>Sardar Patel Institute of Technology</h3>
      <h4 style={{ color: '#e86971' }}>Teaching Assistant</h4>
      <p>
      - Teaching Assistant, Mathematics Professor
      </p>
      <p>
      - Responsible for creating assignments, conducting class tests
      </p>
    </TimelineItem>
  </Timeline>
    </div>
  );
}

export default Experience;
