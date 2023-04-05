import React from 'react';
import { data } from '../utils/data.json';
import college from '../images/college.svg';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

const Exp = () => {
  return (
    <VerticalTimeline animate={false}>
      {data.experience.map((exp) => (
        <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: '#212226', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #212226' }}
        date={exp.years}
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={<i className='ri-building-line'></i>}>
        <h2 className='vertical-timeline-element-title title-light'>
          {exp.title}
        </h2>
        <h4 className='vertical-timeline-element-subtitle'>
          {exp.company}
        </h4>
        <p>{exp.description}</p>
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='2015 - 2019'
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={
          <img src={college} alt='img-not-found' style={{ width: 40 }} />
        }>
        <h3 className='vertical-timeline-element-title title-dark'>
          {data.education.degree}
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>
          {data.education.school}
        </h4>
        <p>{data.education.graduated}</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Exp;
