import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import OpenPolytechnic from './pages/OpenPolytechnic';
import BusinessInvoices from './pages/BusinessInvoices';
import SvgIcons from './pages/SvgIcons';
import YouShop from './pages/YouShop';
import RfPtp from './pages/RfPtp';

ReactDOM.render(
	<Router>
		<div>
			<Route path="/" component={App} />
			<Route exact path="/" component={About} />
			<Route exact path="/resume" component={Resume} />
			<Route exact path="/portfolio" component={Portfolio} />
			<Route exact path="/portfolio/open-polytechnic" component={OpenPolytechnic} />
			<Route exact path="/portfolio/business-invoices" component={BusinessInvoices} />
			<Route exact path="/portfolio/svg-icons" component={SvgIcons} />
			<Route exact path="/portfolio/youshop" component={YouShop} />
		</div>
	</Router>, 
	document.getElementById('root')
);

