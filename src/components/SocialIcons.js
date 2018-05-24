import React, { Component } from 'react';
import Icon from './Icon';

class SocialIcons extends Component {
	render() {
	    return (
	    	<ul className="social-icons nobullets nobm">
	    		<li className="social-icons__twitter">
	    			<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/BrianDMilne">
						<Icon icon="twitter" title="Twitter feed" />
	    			</a>
	    		</li>
	    		<li className="social-icons__instagram">
	    			<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/heathnewton">
						<Icon icon="instagram" title="Instagram feed" />
	    			</a>
	    		</li>
	    		<li className="social-icons__github">
	    			<a target="_blank" rel="noopener noreferrer" href="https://github.com/heathnewton">
						<Icon icon="github" title="Github account" />
	    			</a>
	    		</li>
	    	</ul>
	    );
	}
}

export default SocialIcons;