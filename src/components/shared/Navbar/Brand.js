import React from 'react';

function Brand(props) {
	return (
		<div className='nav_logo-box'>
			<img src={props.logo} alt='Logo of the resraraunt' />
		</div>
	);
}

export default Brand;
