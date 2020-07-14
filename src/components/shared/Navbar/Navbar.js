import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Brand from './Brand';
import SideBar from './SideBar';
import logo from '../../../images/Streetcar-logo.jpg';
import NavLinks from './NavLinks';
import './Navbar.scss';

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 767 });
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
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className={`nav__hamburger--button ${
            open ? 'nav__hamburger--change nav__hamburger--button' : ''
          }`}
        >
          <div className={'nav__hamburger--bar1'}></div>
          <div className='nav__hamburger--bar2'></div>
          <div className='nav__hamburger--bar3'></div>
        </button>

        {open && <SideBar open={open} setOpen={setOpen} />}
      </Mobile>
    </nav>
  );
}
// <FontAwesomeIcon
// icon={faBars}
// size='lg'
// color={'white'}
// open={open}
// />
export default Navbar;
