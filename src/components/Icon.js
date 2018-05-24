import React, { Component } from 'react';

class Icon extends Component {
	render() {
	    return (
	    	<span className={"svg-icon svg-icon-" + this.props.icon}>
				<svg>
					<title>{this.props.title}</title>
					<use xlinkHref={"/assets/images/svg/sprite.svg#" + this.props.icon}></use>
				</svg>
			</span>
	    );
	}
}

export default Icon;