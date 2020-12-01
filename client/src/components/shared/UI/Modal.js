import React from 'react';
import './Modal.scss';

const Modal = ({ setOpen }) => {
  return (
    <div
      className='modal'
      onClick={() => {
        setOpen(false);
      }}
    ></div>
  );
};

export default Modal;
