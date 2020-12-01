import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ContactPage.scss';
import SectionHeading from '../components/shared/UI/SectionHeading';
import Contactform from './ContactForm';
import Mobile from '../components/shared/Layout/Mobile';
import Phone from '../components/shared/UI/Phone';
import FollowUs from '../components/FollowUs';
import MyMap from './Map/MyMap';

function ContactPage({ register, handleSubmit, errors }) {
  // for Map component
  const API_KEY = process.env.REACT_APP_NOT_GOOGLE_MAP_API;

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
          <FollowUs />
        </div>
        <Contactform
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        ></Contactform>
      </div>
      <MyMap apiKey={API_KEY} lat='29.951152' lng='-90.070007'></MyMap>
    </div>
  );
}

export default ContactPage;
