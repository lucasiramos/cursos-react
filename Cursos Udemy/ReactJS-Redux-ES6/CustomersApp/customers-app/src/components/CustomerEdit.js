import React from 'react'

import CustomersListItem from './CustomersListItem'

const CustomerEdit = ({ name, dni, age }) => {
	return (
		<div>
			<h2>Edición del cliente</h2>
			<h3>Nombre: {name} / DNI: {dni} / Edad: {age} </h3>
		</div>
	)
}

export default CustomerEdit