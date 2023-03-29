import React from 'react';
import { motion } from 'framer-motion';

import Wave from './Wave';

import { titleAnimation, fade, photoAnimation } from '../utils/animation';

import {
  LayoutStyle,
  DescriptionStyle,
  ImageStyle,
  HideStyle,
} from '../utils/styles';

const AboutSection = ({ main }) => {
  return (
    <LayoutStyle>
      <DescriptionStyle>
        <motion.div className='title'>
          <HideStyle>
            <motion.h2 variants={titleAnimation}>
              I'm <span>{main.name}</span>
            </motion.h2>
          </HideStyle>
        </motion.div>
        <motion.p variants={fade}>
          A <span>{main.occupation}</span> from {main.address.country}.{' '}
          {main.description}
        </motion.p>
        <a href={main.resumeDownload} target='_blank' rel='noopener noreferrer'>
          <motion.button variants={fade}>My Resume</motion.button>
        </a>
      </DescriptionStyle>
      <ImageStyle>
        <motion.img
          variants={photoAnimation}
          src={`images/${main.image}`}
          alt='guy with a camera'
        />
      </ImageStyle>
      <Wave />
    </LayoutStyle>
  );
};

export default AboutSection;
