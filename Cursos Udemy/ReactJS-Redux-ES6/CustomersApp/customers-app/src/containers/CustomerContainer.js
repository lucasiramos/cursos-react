import React, { Component } from 'react';

import AppFrame from './../components/AppFrame'
import CustomerEdit from './../components/CustomerEdit'
import CustomerData from './../components/CustomerData'
import { Route } from 'react-router-dom'
import { customers } from './../constants/customers'

class CustomerContainer extends Component {
	constructor(){
		super()

		this.state = {
			nombre: "",
			dni: "0",
			edad: 0
		}
	}

	componentDidMount(){
		const unCliente = customers.find( c => c.dni === this.props.dni)
		this.setState({ 
			nombre: unCliente.name, 
			dni: unCliente.dni,
			edad: unCliente.age
		})
	}

	renderBody = () => (
		<Route path="/customer/:dni/edit" children={
			( { match } ) => ( 
				match ? 
					<CustomerEdit name={'Un nombre'} /> : 
					<CustomerData /> )
		} />
	)

	// <p>Datos del cliente: </p>
	render(){
		return (
			<div>
				<AppFrame 
					header={`Cliente: ${this.state.nombre}`} 
					body={this.renderBody()} />
				<button onClick={this.onClickHandler}>Click</button>
			</div>
		);	
	}
}

export default CustomerContainer;