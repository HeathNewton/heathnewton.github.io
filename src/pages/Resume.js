import React, { Component } from 'react';

class Resume extends Component {
	render() {
	    return (
	    	<main id="resume" role="main" className="main">
				<div className="main-inner">
		    		<h1>Résumé</h1>
		    		<h2>Key skills</h2>
		    		<ul>
		    			<li>Strong analyst and solver of complex problems</li>
		    			<li>Experienced supervisor and technical advisor</li>
		    			<li>Successfully manages projects and meets deadlines</li>
						<li>Excellent team member, relationship builder and collaborator</li>
						<li>Motivated and achievement-oriented</li>
		    		</ul>
		    		<h2>Technical skills</h2>
		    		<div className="grid resume-grid">
		    			<div className="grid__item">
				    		<h3>Excellent</h3>
				    		<ul className="nobm">
				    			<li>HTML</li>
				    			<li>CSS</li>
				    			<li>Sass/Compass</li>
				    			<li>SVG</li>
				    			<li>Knowledge of the principles of accessibility of web pages (WCAG2)</li>
				    		</ul>
		    			</div>
		    			<div className="grid__item">
				    		<h3>Pretty good</h3>
				    		<ul className="nobm">
				    			<li>JavaScript (jQuery)</li>
				    			<li>Git</li>
				    			<li>Grunt/Gulp/NPM</li>
								<li>Drupal 6/7</li>
								<li>Adobe Fireworks</li>
								<li>Adobe Illustrator</li>
				    		</ul>
		    			</div>
		    			<div className="grid__item">
				    		<h3>Not bad</h3>
				    		<ul className="nobm">
				    			<li>JavaScript (vanilla)</li>
								<li>Adobe Photoshop</li>
								<li>Angular 1</li>
								<li>PHP</li>
				    		</ul>
		    			</div>
		    			<div className="grid__item">
				    		<h3>Have worked with</h3>
				    		<ul className="nobm">
				    			<li>ES6</li>
								<li>React</li>
								<li>ASP.Net</li>
								<li>XSLT</li>
				    		</ul>
		    			</div>
		    		</div>
		    		<h2>Education / Qualifications</h2>
		    		<ul className="nobullets">
						<li>1995 | Victoria University of Wellington | Diploma of Library and Information Studies</li>
						<li>1992 | Victoria University of Wellington | Bachelor of Arts</li>
					</ul>
					<h2>Employment history</h2>
					<div className="grid employment-grid">
		    			<div className="grid__item">
				    		<h3>New Zealand Post Limited</h3>
				    		<table className="text-table">
					    		<tbody>
						    		<tr>
							    		<th>Start Date:</th>
							    		<td>January 2013</td>
						    		</tr>
						    		<tr>
							    		<th>End Date:</th>
							    		<td>Currently employed</td>
						    		</tr>
						    		<tr>
							    		<th>Position / Title:</th>
							    		<td>Front-end Web Developer</td>
						    		</tr>
					    		</tbody>
				    		</table>
				    		<h4>Responsibilities / Achievements</h4>
				    		<ul className="nobm">
				    			<li>Responsible for the front-end aspect (HTML, CSS, and JavaScript) of the main NZ Post website (www.nzpost.co.nz)</li>
				    			<li>Developed website applications and tools as part of a wider team (including external vendors)</li>
				    			<li>Created and maintained a Pattern Library based on Atomic Design principles</li>
				    			<li>Implemented responsive redesign of main site over the space of a year</li>
				    			<li>Developed an icon system as an SVG sprite</li>
				    			<li>Developed templates for HTML emails that work in many different email clients</li>
				    			<li>Developed RightNow instances of the National Contact Centre Knowledge Base for internal use and for the CourierPost website</li>
				    		</ul>
		    			</div>
		    			<div className="grid__item">
				    		<h3>Signify Limited</h3>
				    		<table className="text-table">
					    		<tbody>
						    		<tr>
							    		<th>Start Date:</th>
							    		<td>May 2007</td>
						    		</tr>
						    		<tr>
							    		<th>End Date:</th>
							    		<td>December 2012</td>
						    		</tr>
						    		<tr>
							    		<th>Position / Title:</th>
							    		<td>Senior Web Developer</td>
						    		</tr>
					    		</tbody>
				    		</table>
				    		<h4>Responsibilities / Achievements</h4>
				    		<ul className="nobm">
				    			<li>The company had a number of clients from the government, non-profit, and commercial sectors</li>
				    			<li>The company's developers worked in teams on individual projects</li>
				    			<li>Contributed to the development of client websites, taking design templates and building them in HTML, CSS and JavaScript, with emphasis on web standards accessibility, and progressive enhancement</li>
				    			<li>Contributed to the maintenance of client websites</li>
				    			<li>Over time, contributed more and more back-end code in the development of these websites (e.g. PHP, ASP.NET, XSLT)</li>
				    			<li>Gained working knowledge of a number of Content Management Systems, especially Drupal, Plone and Umbraco</li>
				    			<li>Subject Matter Expert for HTML and CSS</li>
				    			<li>Advised other developers in HTML and CSS techniques to accomplish their development goals</li>
				    			<li>Became expert on cross-browser issues (especially with Internet Explorer) and techniques to solve them</li>
				    			<li>Developed and implemented testing plans for compliance with front-end standards such as WCAG, NZGWS and best practices in HTML and CSS</li>
				    			<li>Peer-reviewed other developers' HTML and CSS code</li>
				    			<li>Provided technical assistance to project and account managers when liaising with clients</li>
				    			<li>Provided technical assistance to account and business managers in the process of responding to RFPs</li>
				    		</ul>
		    			</div>
		    			<div className="grid__item">
				    		<h3>Ministry of Economic Development</h3>
				    		<table className="text-table">
					    		<tbody>
						    		<tr>
							    		<th>Start Date:</th>
							    		<td>July 2001</td>
						    		</tr>
						    		<tr>
							    		<th>End Date:</th>
							    		<td>May 2007</td>
						    		</tr>
						    		<tr>
							    		<th>Position / Title:</th>
							    		<td>Web Content Administrator</td>
						    		</tr>
					    		</tbody>
				    		</table>
				    		<h4>Responsibilities / Achievements</h4>
				    		<ul className="nobm">
				    			<li>Administered the content of the Ministry's main website, some smaller satellite sites, and of the Ministry's Intranet - publishing documents and maintaining the sites' integrity</li>
				    			<li>Contributed to the project to redevelop the front-end and back-end of all the Ministry's websites</li>
				    			<li>Contributed to projects to develop new websites as required</li>
				    			<li>Helped develop and enforce Ministry standards and New Zealand Government Web Standards and Recommendations compliance for all Ministry websites</li>
				    			<li>Administered the registration of Ministry domain names</li>
				    			<li>Member of the State Services Commission's Web Guidelines Working Group which developed version 1.0 of the New Zealand Government Web Standards and Recommendations, and, prior to that, a checklist for version 2.1 of the Guidelines</li>
				    		</ul>
		    			</div>
		    			<div className="grid__item">
				    		<h3>Ministry of Commerce / Economic Development</h3>
				    		<table className="text-table">
					    		<tbody>
						    		<tr>
							    		<th>Start Date:</th>
							    		<td>July 1999</td>
						    		</tr>
						    		<tr>
							    		<th>End Date:</th>
							    		<td>July 2001</td>
						    		</tr>
						    		<tr>
							    		<th>Position / Title:</th>
							    		<td>Internet Specialist</td>
						    		</tr>
					    		</tbody>
				    		</table>
				    		<h4>Responsibilities / Achievements</h4>
				    		<ul className="nobm">
				    			<li>Administered the Ministry's main website</li>
				    			<li>Created and administered small satellite websites such as the Ministerial Inquiries into the Electricity Industry and Telecommunications</li>
				    			<li>Helped develop and enforce Ministry web management standards for all Ministry websites</li>
				    			<li>Oversaw and did the bulk of the conversion of files when the Ministry's website was rebranded due to the change of name</li>
				    		</ul>
		    			</div>
					</div>
					<h3>Previous Employment</h3>
					<ul className="nobullets">
						<li>September 1997 - July 1999 | Ministry of Commerce | Web Advisor</li>
						<li>April 1991 - September 1997 | Ministry of Commerce | Acquisitions Librarian</li>
						<li>August 1986 - April 1991 | Dept of Trade and Industry / Ministry of Commerce | Circulation Assistant</li>
					</ul>
				</div>
			</main>
	    );
	}
}

export default Resume;