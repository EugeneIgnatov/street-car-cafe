import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage(props) {
	return (
		<div>
			<h1>404</h1>
			<Link to='/'>Home Page</Link>
		</div>
	);
}

export default NotFoundPage;
