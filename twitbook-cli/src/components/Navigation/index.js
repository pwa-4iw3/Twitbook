import React from 'react';

import {Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../Sign/SignOut';
import { AuthUserContext } from '../Session';

const Navigation = () => (
	<header className="root">
		 <h1 className="logo">Github tweet</h1>
		<AuthUserContext.Consumer>
			{authUser => authUser ? (
					<NavigationAuth authUser={authUser} />
				) : (
					<NavigationNonAuth />
				)
			}
		</AuthUserContext.Consumer>
	</header>
);

const NavigationAuth  = ({ authUser }) => (
	
	<ul>
		<li>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={ROUTES.HOME}>Home</Link>
		</li>
		<li>
			<Link to={ROUTES.ACCOUNT}>Account</Link>
		</li>
		<li>
			<Link to={ROUTES.LISTEAMIS}>Friend list</Link>
		</li>
		<li>
			<SignOutButton />
		</li>
	</ul>
);

const NavigationNonAuth = () => (
	<ul>
		<li>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={ROUTES.SIGN_IN}>Sign In</Link>
		</li>
		<li>
		<Link to={ROUTES.SIGN_UP}>Sign Up</Link>
	</li>
	</ul>
);
	
	
	

export default Navigation;