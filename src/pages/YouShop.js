import React, { Component } from 'react';
import ProjectHeading from '../components/ProjectHeading';
import Modal from '../components/Modal';

const project = "youshop";

class YouShop extends Component {
	render() {
	    return (
	    	<main id={"project-" + project} role="main" className="main project">
	    		<div className="main-inner">
	    			<ProjectHeading item={project} title="YouShop Consolidation" org="New Zealand Post" dates="August to December 2014" desc="Building an interface to allow users to consolidate multiple YouShop parcels." />
	    			<p>(Coming Soon)</p>
	 				<h2>Screenshot</h2>
	    			<div className="screenshot-gallery grid">
	    				<Modal project={project} page="landing" caption="YouShop Warehouses page: parcels chosen for consolidation" />
					</div>
	    		</div>
	    	</main>
	    );
	}
}

export default YouShop;