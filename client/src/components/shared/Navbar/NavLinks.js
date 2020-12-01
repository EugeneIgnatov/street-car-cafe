import React from 'react';
import { NavLink } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import { motion } from 'framer-motion';

import './NavLinks.scss';

const NavLinks = ({ setOpen }) => {
  const size = useWindowSize();
  const handleCloseSideBar = () => {
    setOpen(false);
  };

  return (
    <div className='nav_container'>
      <motion.div
        className='nav_link'
        onClick={handleCloseSideBar}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink to='/' activeClassName='nav_links-active' exact>
          {size.width > 767 ? 'Street car cafe' : 'Home'}
        </NavLink>
      </motion.div>
      <motion.div
        className='nav_link'
        onClick={handleCloseSideBar}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink to='/menu' activeClassName='nav_links-active'>
          Menu
        </NavLink>
      </motion.div>
      <motion.div
        className='nav_link'
        onClick={handleCloseSideBar}
        whileHover={{
          scale: 1.2,
        }}
      >
        <NavLink to='/contact' activeClassName='nav_links-active'>
          Contact
        </NavLink>
      </motion.div>
    </div>
  );
};

export default NavLinks;
