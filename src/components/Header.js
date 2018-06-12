import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Header extends Component {
	render () {
		return (
	        <header className="header">
	          <div className="header-inner">
	            <div className="app-title">
	            	{/* <span className="app-title__title">Curriculum vitae</span>  */}
					<span className="app-title__name">Brian Milne</span> 
					<span className="app-title__position">Front-end web developer</span>
	            </div>
		          <nav>
		          	<ul className="nobullets nobm">
		          		<li><NavLink exact to="/">Home</NavLink></li>
		          		<li><NavLink to="/resume">Résumé</NavLink></li>
		          		<li><NavLink to="/portfolio">Portfolio</NavLink></li>
		          	</ul>
		          </nav>
	          </div>
	        </header>
		);
	}
}

export default Header;