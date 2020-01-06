import React, { useState, useEffect } from 'react'

import './estilos.css'
import CtxUsuario from './CtxUsuario'

const Primer = () => {
	return (
		<CtxUsuario.Consumer>
			{value => (
				<div className="primer">
					Nombre: {value.nombre} <br/>
					Apellido: {value.apellido} <br/>
					Edad: {value.edad}
				</div>
			)}
		</CtxUsuario.Consumer>
	)
}

export default Primer