import React, { Component } from 'react';

class Contact extends Component {
	render() {
	    return (
	    	<main id="contact" role="main" className="main">
				<div className="main-inner">
		    		<h1>Contact me</h1>
		    		<table className="contacts">
		    			<tbody>
				    		<tr className="contacts__address">
					    		<th>Address:</th>
					    		<td>13 Kilkelly Close, Tawa, Wellington</td>
				    		</tr>
				    		<tr className="contacts__phone">
					    		<th>Phone:</th>
					    		<td>021 154 1962</td>
				    		</tr>
				    		<tr className="contacts__email">
					    		<th>Email:</th>
					    		<td><a href="mailto:brian.milne@slingshot.co.nz">brian.milne@slingshot.co.nz</a></td>
				    		</tr>
				    		<tr className="contacts__github">
					    		<th>Github:</th>
					    		<td><a href="https://github.com/HeathNewton">https://github.com/HeathNewton</a></td>
				    		</tr>
		    			</tbody>
		    		</table>
				</div>
			</main>
	    );
	}
}

export default Contact;