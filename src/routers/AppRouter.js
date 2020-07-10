import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import ContactPage from '../components/ContactPage';
import MenuPage from '../components/MenuPage';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer';
import '../App.scss';

function AppRouter(props) {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact>
						<HomePage />
					</Route>
					<Route path='/menu'>
						<MenuPage />
					</Route>
					<Route path='/contact'>
						<ContactPage />
					</Route>
					<Route>
						<NotFoundPage />
					</Route>
				</Switch>
				<Footer height={4} />
			</Router>
		</div>
	);
}

export default AppRouter;
