import React from 'react'

function SchoolItem(props){
	return (
		<div>
			<h1><u>{props.infoProducto.nombre}</u></h1>
			<p>{props.infoProducto.descripcion}</p>
			<h3>{props.infoProducto.precio}</h3>
			<hr />
		</div>
	)
}

export default SchoolItem