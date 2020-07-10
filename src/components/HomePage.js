import React from 'react';

import './HomePage.scss';
import pic from '../images/banner-slide-home.png';

function HomePage(props) {
	return (
		<div className='home_cover'>
			<div className='home_image-box'>
				<img src={pic} alt='logo'></img>
			</div>
		</div>
	);
}

export default HomePage;
