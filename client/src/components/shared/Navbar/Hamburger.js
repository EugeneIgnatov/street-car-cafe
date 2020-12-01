import React from 'react';
import './Hamburger.scss';

function Hamburger({ open, setOpen }) {
  return (
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
  );
}

export default Hamburger;
