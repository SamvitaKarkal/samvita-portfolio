import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import ScrollTop from '../components/ScrollTop';
import Work from '../components/Work';

import { pageAnimation, slider, sliderContainer } from '../utils/animation';

const MyWork = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
      <motion.div variants={sliderContainer} style={{ overflow: 'hidden' }}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
      </motion.div>
      <Work />
      <ScrollTop />
    </motion.div>
  );
};

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #166d3b;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ffffff;
`;
const Frame3 = styled(Frame1)`
  background: #f9004d;
`;

export default MyWork;
