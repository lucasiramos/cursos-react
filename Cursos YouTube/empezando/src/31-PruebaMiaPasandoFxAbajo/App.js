import React, { useState, useEffect } from 'react'

import Primer from './Primer'

import './estilos.css'

const App = () => {
	const [vPrincipal, setVPrincipal] = useState("vacío")
	const [stRnd, setStRnd] = useState(0)

	useEffect(() => {
		console.log("Actualizando vPrincipal")
	}, [vPrincipal])

	const cambiarTiempoPrincipal = () => {
		const d = new Date();
		const n = d.toLocaleString();
		setVPrincipal(n)
	}

	const mostrarRndPrincipal = pRnd => {
		setStRnd(pRnd)
	}

	return (
		<div className="principal">
			<h1>Principal: {vPrincipal}</h1>
			<button onClick={cambiarTiempoPrincipal}>Cambiar tiempo principal</button>
			<div className="random">
				Random principal: {stRnd}
			</div>
			<Primer horaPrincipal={vPrincipal} mostrarRndPrincipal={mostrarRndPrincipal}/>
		</div>
	)
}

export default App