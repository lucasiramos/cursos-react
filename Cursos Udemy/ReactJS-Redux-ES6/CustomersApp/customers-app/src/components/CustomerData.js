import React from 'react'

const CustomerData = ({name, dni, age}) => {
	return (
		<div>
			<div className="customer-data">
				<h2>Datos del cliente</h2>
				<div><strong>Nombre: </strong>{name}</div>
				<div><strong>DNI: </strong>{dni}</div>
				<div><strong>Edad: </strong>{age}</div>
			</div>
		</div>
	)
}

export default CustomerData