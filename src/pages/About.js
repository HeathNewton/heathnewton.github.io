import React, { Component } from 'react';
import SocialIcons from '../components/SocialIcons';

class About extends Component {
	render() {
	    return (
	    	<main id="about" role="main" className="main">
				<div className="main-inner">
		    		<h1>About me</h1>
		    		<div className="about-grid">
			    		<h2>Where do I live?</h2>
			    		<p>Wellington, New Zealand</p>
			    		<h2>What do I do?</h2>
			    		<p>I'm a front-end web developer specialising in HTML and CSS, but who also knows JavaScript.</p>
			    		<h2>What am I passionate about?</h2>
			    		<p>Realising designs in a responsive and accessible way.</p>
			    		<h2>What am I excited about?</h2>
			    		<p></p>
			    		<h2 className="visuallyhidden">Contact me</h2>
			    		<SocialIcons />
		    		</div>

				</div>
			</main>
	    );
	}
}

export default About;