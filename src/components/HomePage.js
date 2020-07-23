import React from 'react';

import './HomePage.scss';
import pic from '../images/banner-slide-home.png';
import trolley from '../images/street-restaurant-door002.jpg';

function HomePage(props) {
  return (
    <div>
      <div className='home_cover'>
        <div className='home_image-box'>
          <img src={pic} alt='logo'></img>
        </div>
      </div>
      <div className='home_about'>
        <div className='home_about-name-container'>
          <h1 className='home_about-name'>
            Streetcar <span>cafe</span>
          </h1>
          <h3>Coffee & Beignet</h3>
          <span className='home_about-break-line'></span>
        </div>

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

          <button>See our menu</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
