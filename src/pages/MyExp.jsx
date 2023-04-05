import React from 'react';
import { motion } from 'framer-motion';
import Exp from '../components/Exp';
import ScrollTop from '../components/ScrollTop';
import { pageAnimation } from '../utils/animation';
import 'react-vertical-timeline-component/style.min.css';

const MyExp = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
        <Exp />
      <ScrollTop />
    </motion.div>
  );
};

export default MyExp;
