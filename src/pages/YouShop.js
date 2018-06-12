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
	    			<p>The YouShop service had been going for around two years when users expressed a desire to consolidate smaller parcels into one larger one to save shipping costs. Workshops developed a number of requirements for users, including the ability to:</p>
	    			<ul>
	    				<li>select and deselect parcels to see if consolidation would actually lead to savings</li>
	    				<li>consolidate and separate parcels easily</li>
	    				<li>pay for consolidated and non-consolidated parcels over multiple warehouses (YouShhop has two warehouses, US and UK)</li>
	    			</ul>
	    			<p>The functionality was built on top of Post's CMS, Drupal 6, and connected to Post's systems with APIs. The interactive parts were built using Angular 1, while the static parts were simply Drupal 6 PHP templates. My task was to build the UX to fit with YouShop's overall look and feel and make sure the user could get through the process without failing. This involved editing the template and angular files to output the correct HTML patterns and develop CSS to style it. I used the JavaScript animation library Velocity to handle the animations.</p>
	    			<p>It should be noted that this functionality was built at a time before the main NZ Post site was converted to a responsive design. The decision was taken not to include YouShop in this conversion due to its complexity.</p>
	 				<h2>Screenshots</h2>
	 				<p>(Technical limitations of the development environment mean that only parcels from one warehouse - the UK one - can be shown.)</p>
	    			<div className="screenshot-gallery grid">
	    				<Modal project={project} page="page-01" caption="YouShop warehouses page: parcels chosen for consolidation" />
						<Modal project={project} page="page-02" caption="YouShop warehouses page: parcels consolidated" />
						<Modal project={project} page="page-03" caption="YouShop warehouses page: parcels consolidated with the sidebar animated away" />
						<Modal project={project} page="page-04" caption="YouShop review parcels before checking out" />
						<Modal project={project} page="page-05" caption="YouShop payment page" />
						<Modal project={project} page="page-06" caption="YouShop warehouses page: showing parcels that have been paid for but not yet dispatched as well as not paid for yet" />
					</div>
	    		</div>
	    	</main>
	    );
	}
}

export default YouShop;