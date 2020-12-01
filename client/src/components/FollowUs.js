import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './FollowUs.scss';

const FollowUs = () => {
  return (
    <div className='brand_icons-container'>
      <div className='brand_icons'>
        <a
          href='https://www.instagram.com/streetcarcafenola/?hl=en'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          <FontAwesomeIcon
            icon={['fab', 'instagram']}
            size='2x'
            mar='s'
            color='white'
          />{' '}
        </a>
      </div>
      <div className='brand_icons'>
        <a
          href='https://www.facebook.com/StreetcarCafeNola'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          <FontAwesomeIcon
            icon={['fab', 'facebook']}
            size='2x'
            mar='s'
            color='white'
          />{' '}
        </a>
      </div>
      <div className='brand_icons'>
        <a
          href='https://twitter.com/streetcar_cafe'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          <FontAwesomeIcon
            icon={['fab', 'twitter']}
            size='2x'
            mar='s'
            color='white'
          />{' '}
        </a>
      </div>
    </div>
  );
};

export default FollowUs;
