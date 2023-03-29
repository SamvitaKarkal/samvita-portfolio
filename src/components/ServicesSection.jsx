import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { useScroll } from '../utils/useScroll';
import { scrollReveal } from '../utils/animation';
import { LayoutStyle, DescriptionStyle, ImageStyle } from '../utils/styles';

import coder from '../images/coder.svg';

import 'react-circular-progressbar/dist/styles.css';

const ServicesSection = ({ skills }) => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <CustomizeLayoutStyle>
      <DescriptionStyle>
        <h2>
          High <span>quality</span> skills
        </h2>
        <CardsStyle>
          <motion.div
            className='tech-skills'
            variants={scrollReveal}
            animate={controls}
            initial='hidden'
            ref={element}>
            <h2 style={{ fontSize: 24 }}>Technical Skills</h2>
            <div className='skills-block'>
              {skills.technical_skills.map((skill, idx) => (
                <div className='outer-bar' key={idx}>
                  <div
                    className='inner-bar'
                    style={{ width: `${skill.level}%` }}
                  />
                  <div className='skill-details'>
                    <span>{skill.name}</span>
                    <small>{skill.level}%</small>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className='professional-skills'
            variants={scrollReveal}
            animate={controls2}
            initial='hidden'
            ref={element2}>
            <h2 style={{ fontSize: 24, marginTop: 48 }}>Professional Skills</h2>
            <div className='skills-inline'>
              {skills.professional_skills.map((skill, idx) => (
                <ProgressBar
                  percentage={skill.level}
                  title={skill.name}
                  key={idx}
                />
              ))}
            </div>
          </motion.div>
        </CardsStyle>
      </DescriptionStyle>
      <ImageStyle>
        <img src={coder} alt='svg-coder-img' />
      </ImageStyle>
    </CustomizeLayoutStyle>
  );
};

const ProgressBar = ({ percentage, title }) => {
  const styles = {
    strokeLinecap: 'butt',
    textSize: '16px',
    pathColor: `cyan`,
    textColor: '#fff',
    trailColor: 'black',
  };

  return (
    <ProgressBarStyle style={{ width: 150, height: 150 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={3}
        styles={buildStyles(styles)}
      />
      <h3>{title}</h3>
    </ProgressBarStyle>
  );
};

const CustomizeLayoutStyle = styled(LayoutStyle)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const CardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  .tech-skills,
  .professional-skills {
    display: flex;
    flex-direction: column;
    .skills-inline {
      display: flex;
      flex-wrap: wrap;
      @media (max-width: 1300px) {
        justify-content: center;
      }
    }
    .skills-block {
      display: flex;
      flex-direction: column;
      .outer-bar {
        margin: 18px 0px;
        width: 80%;
        height: 8px;
        background-color: black;
        border-radius: 25px;
        @media (max-width: 1300px) {
          margin-left: auto;
          margin-right: auto;
        }
      }
      .inner-bar {
        height: inherit;
        background-color: cyan;
        border-radius: inherit;
      }
      small {
        font-size: 10px;
        float: right;
      }
      span {
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        @media (max-width: 1300px) {
          float: left;
        }
      }
    }
  }
`;

const ProgressBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px 12px;
  h3 {
    font-size: 18px;
    margin-top: 12px;
  }
`;

export default ServicesSection;
