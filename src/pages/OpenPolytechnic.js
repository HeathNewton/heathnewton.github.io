import React, { Component } from 'react';
import ProjectHeading from '../components/ProjectHeading';
import Modal from '../components/Modal';

const project = "open-polytechnic";

class OpenPolytechnic extends Component {
	render() {
	    return (
	    	<main id={"project-" + project} role="main" className="main project">
	    		<div className="main-inner">
	    			<ProjectHeading item={project} title="Website Refresh" org="The Open Polytechnic of New Zealand" dates="July 2018 to November 2018" desc="The Open Polytechnic wanted to refresh the look and feel of their website." />
	    			<p>The project aimed to change the look and feel of the Open Polytech's website as well as make it easier to maintain. As part of this it was decided to keep the existing CMS (Silverstripe) and build a new theme based on Foundation 6.</p>
	    			<p>I was hired as a front-end developer to work as part of a team (including other FE devs, back-end devs, and in-house graphic and UX designers). Using Agile, the team worked through a number of stories to create new patterns and pages.</p>
	    			<p>The new theme uses semantic HTML5, up-to-date CSS and is compliant to WCAG2 level AA. It is responsive and tested on a number of devices. The JavaScript used is largely jQuery, but there is some ES6 as well.</p>
	 				<p>One aspect of this development was to create a number of "slices" - reusable components that can be inserted into pages by a Content Editor where needed.</p>
	 				<p>The refresh is scheduled to go live early on 2019.</p>
	 				<h2>Screenshots</h2>
	    			<div className="screenshot-gallery grid">
	    				<Modal project={project} page="landing" caption="Homepage - Desktop" />
	    				<Modal project={project} page="homepage-480" caption="Homepage - Mobile" />
	    				<Modal project={project} page="landing-page-1700" caption="Landing Page - Desktop" />
	    				<Modal project={project} page="landing-page-480" caption="Landing Page - Mobile" />
	    				<Modal project={project} page="general-page-1700" caption="General Page - Desktop" />
	    				<Modal project={project} page="general-page-480" caption="General Page - Mobile" />
		    			<Modal project={project} page="pasifika-homepage-1700" caption="Pasifika Homepage - Desktop" />
	    				<Modal project={project} page="pasifika-homepage-480" caption="Pasifika Homepage - Mobile" />
	    				<Modal project={project} page="student-stories-1700" caption="Student Stories - Desktop" />
	    				<Modal project={project} page="student-stories-480" caption="Student Stories - Mobile" />
	    				<Modal project={project} page="student-story-1700" caption="A Student Story - Desktop" />
	    				<Modal project={project} page="student-story-480" caption="A Student Story - Mobile" />
	    				<Modal project={project} page="staff-page-1700" caption="Staff Page - Desktop" />
	    				<Modal project={project} page="staff-page-480" caption="Staff Page - Mobile" />
	    				<Modal project={project} page="news-page-1700" caption="News Page - Desktop" />
	    				<Modal project={project} page="news-page-480" caption="News Page - Mobile" />
					</div>
	    		</div>
	    	</main>
	    );
	}
}

export default OpenPolytechnic;