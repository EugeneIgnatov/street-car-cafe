import React from 'react';

import NavLinks from './NavLinks';
import './SideBar.scss';

const SideBar = ({ open, setOpen }) => {
  return (
    <div className='sidebar'>
      <NavLinks open={open} setOpen={setOpen} />
    </div>
  );
};

export default SideBar;
