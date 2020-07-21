import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';

import Brand from './Brand';
import SideBar from './SideBar';
import logo from '../../../images/Streetcar-logo.jpg';
import NavLinks from './NavLinks';
import Hamburger from '../UI/Hamburger';
import Modal from '../UI/Modal';
import './Navbar.scss';

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
};

function Navbar(props) {
  const [open, setOpen] = useState(false);
  return (
    <nav className='nav'>
      <NavLink to='/' exact>
        <Brand logo={logo} />
      </NavLink>
      <Desktop>
        <NavLinks open={open} setOpen={setOpen} />
      </Desktop>
      <Mobile>
        {open && <Modal open={open} setOpen={setOpen} />}
        <Hamburger open={open} setOpen={setOpen} />
        <AnimatePresence>
          {open && <SideBar open={open} setOpen={setOpen} />}
        </AnimatePresence>
      </Mobile>
    </nav>
  );
}

export default Navbar;
