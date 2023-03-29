import React from 'react';
import { motion } from 'framer-motion';

import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ScrollTop from '../components/ScrollTop';

import { pageAnimation } from '../utils/animation';
import { data } from '../utils/data.json';

const AboutMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
      <AboutSection main={data.main} />
      <ServicesSection skills={data.resume.skills} />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutMe;
