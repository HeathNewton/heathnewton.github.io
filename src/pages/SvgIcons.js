import React, { Component } from 'react';
import ProjectHeading from '../components/ProjectHeading';
import Modal from '../components/Modal';

const project = "svg-icons";

class SvgIcons extends Component {
	render() {
	    return (
	    	<main id={"project-" + project} role="main" className="main project">
	    		<div className="main-inner">
	    			<ProjectHeading item={project} title="SVG Icon Sprite" org="New Zealand Post" dates="Ongoing from February 2016" desc="Establishing an SVG icon system using the SVG Sprite technique." />
	    			<p>I decided the time was right to replace our font-based icon system with an SVG sprite. The first stage was to collect the icons and create individual SVG files of them (there was an existing <code>.ai</code> file of the icon set). Then I devised a workflow, first cleaning up some of the code in a text-editor, then running them through SVGO before placing them in a folder. Then running the grunt plugin grunt-svg-sprite over this folder to create the sprite. Then it was a simple matter to create the page in our Pattern Library with all the icons.</p>
	    			<p>A further workflow issue was the initial release and ongoing changes. The folder with the individual SVG files is in the site repository and the grunt script gets run during the release process, so the sprite itself was easy to deploy and is always kept up-to-date in production.</p>
	 				<p>The SVG icons themselves were used in new projects from the first release, but, of course, there were already a substantial number of pages (both content and application) that used the old font icons. If an area was getting updated the icons themselves would be updated too. When time permitted, some areas had just the icons updated, however this process is still ongoing.</p>
	 				<p>Since the initial release, new techniques were discovered and developed, such as the ability to assign two colours to an icon - usually manifested as white backgrounds to certain parts of the icon, but the flexibility of SVG meant that these colours could be set in the CSS depending on the need of the particular circumstance.</p>
	 				<h2>Screenshot</h2>
	    			<div className="screenshot-gallery grid">
	    				<Modal project={project} page="landing" caption="SVG icon sprite sheet in the Pattern Library" />
					</div>
	    		</div>
	    	</main>
	    );
	}
}

export default SvgIcons;