import React from 'react';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import ScrollTop from '../components/ScrollTop';

import college from '../images/college.svg';
import { pageAnimation } from '../utils/animation';
import 'react-vertical-timeline-component/style.min.css';

const MyExp = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
      <VerticalTimeline animate={false}>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#212226', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #212226' }}
          date='April, 2021 - July, 2021'
          iconStyle={{ background: '#000', color: '#fff' }}
          icon={<i className='ri-building-line'></i>}>
          <h2 className='vertical-timeline-element-title title-light'>
            Software Engineer
          </h2>
          <h4 className='vertical-timeline-element-subtitle'>
            @BigBinary Solutions
          </h4>
          <p>React Js | Ruby on Rails | PostgreSql | Tailwind CSS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#fff' }}
          date='Oct, 2020 - Feb, 2021'
          iconStyle={{ background: '#000', color: '#fff' }}
          icon={<i className='ri-building-line'></i>}>
          <h2 className='vertical-timeline-element-title title-dark'>
            Bootcamp in Full-stack development
          </h2>
          <h4 className='vertical-timeline-element-subtitle'>@GUVI Geeks</h4>
          <p>
            HTML | CSS | Bootstrap | Javascript | React Js | Express Js | Node
            Js | MongoDB
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#212226', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #212226' }}
          date='June, 2020 - Sept, 2020'
          iconStyle={{ background: '#000', color: '#fff' }}
          icon={<i className='ri-building-line'></i>}>
          <h3 className='vertical-timeline-element-title'>Software Engineer</h3>
          <h4 className='vertical-timeline-element-subtitle'>@Trikara</h4>
          <p>HTML | CSS | Bootstrap | Javascript | Laravel | MySQL</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date='June, 2019 - Aug, 2019'
          iconStyle={{ background: '#000', color: '#fff' }}
          icon={<i className='ri-briefcase-fill'></i>}>
          <h3 className='vertical-timeline-element-title title-dark'>
            Junior Software Engineer Trainee
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>@Trikara</h4>
          <p>HTML | CSS | Bootstrap | Javascript | Laravel | MySQL</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2016 - 2020'
          iconStyle={{ background: '#000', color: '#fff' }}
          icon={
            <img src={college} alt='img-not-found' style={{ width: 40 }} />
          }>
          <h3 className='vertical-timeline-element-title title-dark'>
            Bachelor's in Computer Science Engineering
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bangalore, Karnataka, India
          </h4>
          <p>Passed with distinction - 8.65 CGPA</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <ScrollTop />
    </motion.div>
  );
};

export default MyExp;
