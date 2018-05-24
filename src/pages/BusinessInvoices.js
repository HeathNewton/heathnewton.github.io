import React, { Component } from 'react';
import ProjectHeading from '../components/ProjectHeading';
import Modal from '../components/Modal';

const project = "business-invoices";

class BusinessInvoices extends Component {
	render() {
	    return (
	    	<main id={"project-" + project} role="main" className="main project">
	    		<div className="main-inner">
	    			<ProjectHeading item={project} title="Business Invoices" org="New Zealand Post" dates="December 2016 to August 2017" desc="This functionality was to enable businesses to pay invoices online rather than by mailing a cheque." />
	    			<p>On-account clients of New Zealand Post would have to pay by cheque to settle their bills, so the business wanted to allow these clients to use the website's payment functionality. I was part of the team that implemented it.</p>
	    			<p>The design wanted a system where someone could enter multiple invoices for multiple clients if need be, so the solution had to take this into account. It also had to robustly handle errors such as entering the wrong invoice number.</p>
	 				<p>The functionality was built on top of Post's CMS, Drupal 6, and connected to the invoicing system with an API. The interactive parts were built using Angular 1. My task was to build the UX to fit with the site's overall look and feel and make sure the user could get through the process without failing.</p>
	 				<p>Mainly, I used existing patterns of HTML and CSS, but added to for unique layout needs. I also needed to manipulate Angular code to get the right blocks in the right place at the right time (including the right error messages).</p>
	 				<h2>Screenshots</h2>
	    			<div className="screenshot-gallery">
	    				<Modal project={project} page="landing" caption="Business Invoices landing page" />
	    				<Modal project={project} page="page-01" caption="Adding rows to be able to enter multiple invoices" />
	    				<Modal project={project} page="page-02" caption="Error if nothing is entered on the landing page" />
	    				<Modal project={project} page="page-03" caption="Errors if information on a row is incomplete" />
	    				<Modal project={project} page="page-04" caption="Error if a wrong customer/invoice number pair is submitted" />
	    				<Modal project={project} page="page-05" caption="Review invoices entered page" />
	    				<Modal project={project} page="page-06" caption="Add another invoice on the review page" />
	    				<Modal project={project} page="page-07" caption="Invoices for multiple customers" />
	    				<Modal project={project} page="page-08" caption="Multiple invoices for multiple customers" />
	    				<Modal project={project} page="page-09" caption="Checkout page" />
					</div>
	    		</div>
	    	</main>
	    );
	}
}

export default BusinessInvoices;