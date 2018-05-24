import React, { Component } from 'react';
import ProjectHeading from '../components/ProjectHeading';
import Modal from '../components/Modal';

const project = "rf-ptp";

class RfPtp extends Component {
	render() {
	    return (
	    	<main id={"project-" + project} role="main" className="main project">
	    		<div className="main-inner">
	    			<ProjectHeading item={project} title="Rate Finder/Pay-to-Post" org="New Zealand Post" dates="Iteratively from 2013" desc="This functionality allows a user to find a postal rate for a parcel and then pay for and print out the label." />
	    			<p>(Coming Soon)</p>
	 				<h2>Screenshot</h2>
	    			<div className="screenshot-gallery">
	    				<Modal project={project} page="landing" caption="Rate Finder landing page" />
					</div>
	    		</div>
	    	</main>
	    );
	}
}

export default RfPtp;