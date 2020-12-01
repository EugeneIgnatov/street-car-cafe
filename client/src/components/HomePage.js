import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.scss';

import brandphrase from '../images/banner-slide-home.png';
import trolley from '../images/street-restaurant-door002.jpg';
import fooditems from '../images/fooditems';
import forsq from '../images/forsq.png';
import opentable from '../images/opentable.png';
import tripadv from '../images/tripadv.png';

import SectionHeading from '../components/shared/UI/SectionHeading';
import Button from './shared/UI/Button';
import Mobile from './shared/Layout/Mobile';
import Desktop from './shared/Layout/Desktop';
import Phone from './shared/UI/Phone';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function HomePage(props) {
  return (
    <div className='home'>
      <div className='home_cover'>
        <motion.div
          className='home_image-box'
          initial='hidden'
          animate='visible'
          variants={variants}
        >
          <img src={brandphrase} alt='logo'></img>
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
          <Desktop>
            <Button link='/menu' posit='flex-start'>
              Full menu
            </Button>
          </Desktop>
          <Mobile>
            <Phone />
            <Button link='/menu' posit='center'>
              Full menu
            </Button>
          </Mobile>
        </div>
      </div>
      <SectionHeading
        headerFirstWord='Fantastic'
        headerSecondWord='Food'
        subHeader='Some of our items'
      />
      <div className='home_image-gallery'>
        {fooditems.map((item, indx) => {
          return (
            <div className='home_image-item' key={indx}>
              <img src={item} alt='foodpic'></img>
            </div>
          );
        })}
      </div>
      <SectionHeading
        headerFirstWord='Trusted'
        headerSecondWord='By'
        subHeader='These fine folks trusted our restaurant and delicious foods.'
      />
      <div className='home_lables'>
        <img src={forsq} alt='forsq logo'></img>
        <img src={opentable} alt='opentable logo'></img>
        <img src={tripadv} alt='tripaviser logo'></img>
      </div>
    </div>
  );
}

export default HomePage;
