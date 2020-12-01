import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Phone.scss';

const Phone = () => {
  return (
    <a href='tel:5042187256'>
      <div className='phone'>
        <FontAwesomeIcon
          icon='phone'
          size='lg'
          rotation={90}
          className='phone_icon'
        />
      </div>
    </a>
  );
};

export default Phone;
