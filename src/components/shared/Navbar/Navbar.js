import React from 'react';
import { NavLink } from 'react-router-dom';

import Brand from './Brand';
import logo from '../../../images/Streetcar-logo.jpg';

import './Navbar.scss';

function Navbar(props) {
	return (
		<nav className='nav'>
			<Brand logo={logo} />
			<div className='nav_links'>
				<div>
					<NavLink to='/' activeClassName='nav_links-active' exact>
						Street car cafe
					</NavLink>
				</div>
				<div>
					<NavLink to='/menu' activeClassName='nav_links-active'>
						Menu
					</NavLink>
				</div>
				<div>
					<NavLink to='/contact' activeClassName='nav_links-active'>
						Contact
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
