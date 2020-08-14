import React from 'react';
import Container from 'react-bootstrap/Container';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import ScrollAnimation from 'react-animate-on-scroll';

import 'react-vertical-timeline-component/style.min.css';

import '../css/experience.css';

function Experience() {
  return (
    <div className="Experience text-center">
    <ScrollAnimation  animateIn='bounceInRight'>
  <h1>Experience</h1>

  </ScrollAnimation>

    <ScrollAnimation animateIn="fadeIn"  animateOut='fadeOut'>

<Container>
<VerticalTimeline>
<VerticalTimelineElement
  className="vertical-timeline-element"
  contentStyle={{ borderTop: '5px solid black' }}
  date="July 2018 - March 2019"
  iconStyle={{ background: '#2d82e3', color: '#fff' }}
>
  <h3 className="vertical-timeline-element-title">Sardar Patel Institute of Technology</h3>
  <h4 className="vertical-timeline-element-subtitle">Teaching Assistant, Mathematics</h4>

</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element"
  date="June 2019 - May 2020"
  iconStyle={{ background: '#2d82e3', color: '#000000' }}
  contentStyle={{borderTop: '5px solid black'} }

>
  <h3 className="vertical-timeline-element-title">Neebal Technologies</h3>
  <h4 className="vertical-timeline-element-subtitle">Teacher</h4>

</VerticalTimelineElement>
<VerticalTimelineElement
  className="vertical-timeline-element"

  contentStyle={{borderTop: '5px solid black'} }
  date="July 2019 - Present"
  iconStyle={{ background: '#2d82e3', color: '#fff' }}
>
  <h3 className="vertical-timeline-element-title">Amadeus Software Labs</h3>
  <h4 className="vertical-timeline-element-subtitle">Devops Engineer</h4>

</VerticalTimelineElement>
<VerticalTimelineElement
  className="vertical-timeline-element"
  date="Jun 2020 - Present"
  iconStyle={{ background: '#2d82e3', color: '#000000' }}
  contentStyle={{borderTop: '5px solid black'} }

>
  <h3 className="vertical-timeline-element-title">upGrad</h3>
  <h4 className="vertical-timeline-element-subtitle">Evangelist</h4>

</VerticalTimelineElement>

</VerticalTimeline>


  </Container>
</ScrollAnimation>

    </div>
  );
}

export default Experience;
