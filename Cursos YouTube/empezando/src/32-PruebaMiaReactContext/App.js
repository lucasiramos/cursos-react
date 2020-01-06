import React, { useState, useEffect } from 'react'

import './estilos.css'
import CtxUsuario from './CtxUsuario'
import Primer from './Primer'

const App = () => {
	const [unUsuario, setUnUsuario] = useState({
		nombre: "Lucas",
		apellido: "Ramos",
		edad: 36
	})

	const clickCambiarDatos = () => {
		const rnd = Math.floor(Math.random() * 100)
		setUnUsuario({
			nombre: `${unUsuario.nombre}${rnd}`,
			apellido: `${unUsuario.apellido}${rnd}`,
			edad: rnd,
		})
	}

	return (
		<CtxUsuario.Provider value={unUsuario}>
			<div className="principal">
				Nombre: {unUsuario.nombre} <br/>
				Apellido: {unUsuario.apellido} <br/>
				Edad: {unUsuario.edad} <br/><br/>

				<button onClick={clickCambiarDatos}>Cambiar datos</button>

				<Primer />
			</div>
		</CtxUsuario.Provider>
	)
}

export default App