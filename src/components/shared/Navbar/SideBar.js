import React, { useEffect } from 'react';

import { motion } from 'framer-motion';

import NavLinks from './NavLinks';
import './SideBar.scss';

//framermotion library
const sideBarVariants = {
  open: { x: 0, transition: { type: 'tween' } },
  closed: { x: '100vw', transition: { duration: 1 } },
};

const SideBar = ({ open, setOpen }) => {
  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, [open, setOpen]);
  return (
    <motion.div
      className='sidebar'
      variants={sideBarVariants}
      initial='closed'
      exit='closed'
      animate='open'
    >
      <NavLinks open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
