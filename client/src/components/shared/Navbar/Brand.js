import React from 'react';
import { motion } from 'framer-motion';

import './Brand.scss';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 4 } },
};

function Brand(props) {
  return (
    <motion.div
      className='nav_logo-box'
      initial='hidden'
      animate='visible'
      variants={variants}
    >
      <img src={props.logo} alt='Logo of the resraraunt' />
    </motion.div>
  );
}

export default Brand;
