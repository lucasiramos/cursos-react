import React from 'react'

function UnaComida(props){
	return(
		<p>{props.info.comida} ({props.info.descripcion})</p>
	)
}

export default UnaComida