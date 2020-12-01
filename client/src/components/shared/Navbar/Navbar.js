import React from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Brand from './Brand';
import SideBar from './SideBar';
import logo from '../../../images/Streetcar-logo.jpg';
import NavLinks from './NavLinks';
import Hamburger from './Hamburger';
import Mobile from '../Layout/Mobile';
import Desktop from '../Layout/Desktop';
import Modal from '../UI/Modal';
import './Navbar.scss';

function Navbar({ open, setOpen }) {
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
