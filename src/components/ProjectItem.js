import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectItem extends Component {
	render() {
	    return (
	    	<li className={"project-item project-item-" + this.props.item}>
	    		<Link to={"/portfolio/" + this.props.item}>
	    			<h2>{this.props.title}</h2>
	    			<div className="project-item__thumbnail">
	    				<img src={process.env.PUBLIC_URL + "/assets/images/" + this.props.item + "/landing-t.jpg"} alt="" />
	    			</div>
	    			<div className="project-item__dates">
	    				{this.props.dates}
	    			</div>
	    			<div className="project-item__description">
	    				{this.props.desc}
	    			</div>
	    		</Link>
			</li>
	    );
	}
}

export default ProjectItem;