import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ContactPage.scss';
import SectionHeading from '../components/shared/UI/SectionHeading';
import Contactform from './ContactForm';
import Mobile from '../components/shared/Layout/Mobile';
import Phone from '../components/shared/UI/Phone';

function ContactPage({ register, handleSubmit, errors }) {
  return (
    <div>
      <Mobile>
        <Phone />
      </Mobile>
      <SectionHeading
        headerFirstWord='Contact'
        headerSecondWord=' Us'
        subHeader='Do you have something to say. Write Us!'
      />
      <div className='contact_container'>
        <div className='contact_address'>
          <h3>Address</h3>
          <p className='contact_address-text'>
            <FontAwesomeIcon
              icon='map-marker'
              className='contact_address-icon'
              pull='left'
              size='1x'
              mar='s'
            />{' '}
            312 St Charles Avenue, New Orleans, LA 70130
          </p>
          <p className='contact_address-text'>
            {' '}
            <FontAwesomeIcon
              icon='phone'
              className='contact_address-icon'
              pull='left'
              size='1x'
              rotation={90}
            />{' '}
            (504) 218 7256
          </p>
          <p className='contact_address-text'>
            {' '}
            <FontAwesomeIcon
              icon='envelope'
              className='contact_address-icon'
              pull='left'
              size='1x'
              mar='s'
            />{' '}
            info@streetcarcafe.com
          </p>
          <h3>Working hours</h3>
          <p className='contact_address-text'>
            10:00 am to 11:00 pm on Weekdays
          </p>
          <p className='contact_address-text'>
            11:00 am to 11:30 pm on Weekends
          </p>
          <h3>Follow us</h3>
          <div className='contact_address-brand-icons'>
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
        </div>
        <Contactform
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        ></Contactform>
      </div>
    </div>
  );
}

export default ContactPage;
