import React, { Component } from 'react';
import ProjectItem from '../components/ProjectItem';

class Portfolio extends Component {
	render() {
	    return (
	    	<main id="portfolio" role="main" className="main">
				<div className="main-inner">
		    		<h1>Portfolio</h1>
		    		<p>Here are some of the projects I've contributed to.</p>
		    		<ul className="projects-list nobullets nobm">
		    			<ProjectItem item="business-invoices" title="NZ Post Business Invoices" dates="December 2016 to August 2017" desc="This functionality was to enable businesses to pay invoices online rather than by mailing a cheque." />
		    			<ProjectItem item="svg-icons" title="SVG Icon Sprite" dates="Ongoing from February 2016" desc="Establishing an SVG icon system using the SVG Sprite technique." />
		    			<ProjectItem item="youshop" title="YouShop Consolidation" dates="August to December 2014" desc="Building an interface to allow users to consolidate multiple YouShop parcels." />
		    			<ProjectItem item="rf-ptp" title="Ratefinder/Pay-to-Post" dates="Iteratively from 2013" desc="This functionality allows a user to find a postal rate for a parcel and then pay for and print out the label." />
		    		</ul>
				</div>
			</main>
	    );
	}
}

export default Portfolio;