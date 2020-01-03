import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'
import CustomerContainer from './containers/CustomerContainer'
import CustomersContainer from './containers/CustomersContainer'

class App extends Component {
	renderCustomerNewContainer = () => <h1>Nuevo cliente</h1>

	render(){
		return (
			<Router>
				<div>
					<Route exact path="/" component={HomeContainer} />
					<Route exact path="/customers" component={CustomersContainer} />
					<Switch>
						<Route path="/customers/new" component={this.renderCustomerNewContainer} />
						<Route path="/customer/:dni" render={props => <CustomerContainer dni={props.match.params.dni}/>} />
					</Switch>
				</div>
			</Router>
		);	
	}
}

// <Route path="/customer/:dni" component={CustomerContainer} />

export default App;
