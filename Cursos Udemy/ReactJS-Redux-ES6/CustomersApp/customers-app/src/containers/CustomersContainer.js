import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
/*import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'*/

import AppFrame from './../components/AppFrame'
import CustomersList from './../components/CustomersList'
import CustomerActions from './../components/CustomersActions'
// import { fetchCustomers }  from './../actions/fetchCustomers'

import { customers } from './../constants/customers'

class CustomersContainer extends Component{
	/*componentDidMount(){
		this.props.fetchCustomers()
	}*/

	handleAddNew = () => {
		this.props.history.push('customers/new')
	}

	renderBody = () => (
		<div>
			<CustomersList 
				customers={customers} 
				urlPath={'customer/'} />
			<CustomerActions>
				<button onClick={this.handleAddNew}>Nuevo cliente</button>
			</CustomerActions>
			<h4>Lalala</h4>
		</div>
	)

	render(){
		return (
			<div>
				<AppFrame 
					header={'Listado de clientes'} 
					body={this.renderBody()} />
			</div>
		)	
	}
}

/*CustomersContainer.defaultProps = {
	customers: [
		{
			"dni": "27000000",
			"name": "Juan Perez",
			"age": 37
		},
		{
			"dni": "30000000",
			"name": "Otro mas",
			"age": 33
		},
		{
			"dni": "33000000",
			"name": "Ultimo Rodriguez",
			"age": 38
		},
	]
}*/

export default withRouter(CustomersContainer)
//export default withRouter(connect(null, { fetchCustomers })(CustomersContainer))