import React, { useEffect } from 'react';

import NavLinks from './NavLinks';
import './SideBar.scss';

const SideBar = ({ open, setOpen }) => {
  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, [open, setOpen]);
  return (
    <div className='sidebar'>
      <NavLinks open={open} setOpen={setOpen} />
    </div>
  );
};

export default SideBar;
