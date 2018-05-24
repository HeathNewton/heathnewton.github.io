import React, { Component } from 'react';

class ProjectHeading extends Component {
	render() {
	    return (
	    	<div className="project__intro">
	    		<h1>Project - {this.props.title}</h1>
	    		<p className="subheader subheader-org">{this.props.org}</p>
	    		<p className="subheader subheader-dates">{this.props.dates}</p>
	    		<p className="subheader subheader-desc">{this.props.desc}</p>
			</div>
	    );
	}
}

export default ProjectHeading;