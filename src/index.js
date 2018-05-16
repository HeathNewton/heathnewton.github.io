import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import About from './components/About';
import Projects from './components/Projects';

ReactDOM.render(
	<Router>
		<div>
			<Route path="/" component={App} />
			<Route exact path="/" component={About} />
			<Route path="/projects" component={Projects} />
		</div>
	</Router>, 
	document.getElementById('root')
);

