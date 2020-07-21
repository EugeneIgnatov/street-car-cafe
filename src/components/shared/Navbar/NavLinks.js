import React from 'react';
import { NavLink } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';

import './NavLinks.scss';

const NavLinks = ({ setOpen }) => {
  const size = useWindowSize();
  const handleCloseSideBar = () => {
    setOpen(false);
  };

  return (
    <div className='nav_container'>
      <div className='nav_link' onClick={handleCloseSideBar}>
        <NavLink to='/' activeClassName='nav_links-active' exact>
          {size.width > 767 ? 'Street car cafe' : 'Home'}
        </NavLink>
      </div>
      <div className='nav_link' onClick={handleCloseSideBar}>
        <NavLink to='/menu' activeClassName='nav_links-active'>
          Menu
        </NavLink>
      </div>
      <div className='nav_link' onClick={handleCloseSideBar}>
        <NavLink to='/contact' activeClassName='nav_links-active'>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavLinks;
