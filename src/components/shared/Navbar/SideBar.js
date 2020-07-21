import React, { useEffect } from 'react';

import { motion } from 'framer-motion';

import NavLinks from './NavLinks';
import './SideBar.scss';

// const variants = {
//   open: { x: '100' },
//   closed: { x: '+100%' },
// };

const SideBar = ({ open, setOpen }) => {
  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, [open, setOpen]);
  return (
    <motion.div className='sidebar'>
      <NavLinks open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
