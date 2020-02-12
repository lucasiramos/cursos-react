import React from 'react';

import Home from './pages/Home'
import pButton from './pages/Button'
import Error from './pages/Error'

import { Route, Switch } from 'react-router-dom'

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/button/" component={pButton} />

				<Route component={Error} />
			</Switch>
		</div>
	);
}

export default App;