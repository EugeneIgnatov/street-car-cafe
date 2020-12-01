import React from 'react';

// import githubLogo from '../../images/github-logo.png';
import './Footer.scss';

function Footer(props) {
	return (
		<div className='footer' style={{ height: `${props.height}rem` }}>
			<p>
				Made with care by,{' '}
				<a
					href='https://github.com/EugeneIgnatov'
					target='_blank'
					rel='noopener noreferrer'
				>
					Eugene Ignatov
				</a>
			</p>
		</div>
	);
}

export default Footer;
