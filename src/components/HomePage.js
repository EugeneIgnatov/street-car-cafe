import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import pic from '../images/banner-slide-home.png';
import trolley from '../images/street-restaurant-door002.jpg';

import SectionHeading from '../components/shared/SectionHeading';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function HomePage(props) {
  return (
    <div>
      <div className='home_cover'>
        <motion.div
          className='home_image-box'
          initial='hidden'
          animate='visible'
          variants={variants}
        >
          <img src={pic} alt='logo'></img>
        </motion.div>
      </div>
      <SectionHeading
        headerFirstWord='Streetcar'
        headerSecondWord='Cafe'
        subHeader='Coffe & Beignet'
      />{' '}
      <div className='home_about'>
        <div className='home_about-image'>
          <img src={trolley} alt='trolley'></img>
        </div>
        <div className='home_about-text-container'>
          <p>
            Located in the CBD, Streetcar Cafe is the newest culmination of
            local restaurateurs with over 10 years of experience. Streetcar Cafe
            specializes in craft coffees, and house made beignets as well as
            fabulous seafood, pastas and more! At Streetcar Cafe we pride
            ourselves on amazing service, and fresh ingredients. Come visit us
            for a healthy breakfast or a late night cocktail!
          </p>

          <button>
            <Link to='/menu'>See our menu</Link>
          </button>
        </div>
      </div>
      <SectionHeading
        headerFirstWord='New'
        headerSecondWord='Orleans'
        subHeader='The great History'
      />
      <div className='home_image-gallery'></div>
    </div>
  );
}

export default HomePage;
