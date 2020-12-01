import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

const Button = ({ children, link, posit = 'center' }) => {
  if (link) {
    return (
      <button className='button' style={{ alignSelf: posit }}>
        {' '}
        <Link to={link}>{children}</Link>{' '}
      </button>
    );
  } else {
    return <button>{children}</button>;
  }
};

export default Button;
