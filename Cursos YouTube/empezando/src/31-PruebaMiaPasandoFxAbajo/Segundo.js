import React, { useState, useEffect } from 'react'

import Tercer from './Tercer'

import './estilos.css'

const Primer = ({horaPrincipal, horaPrimer, mostrarRndPrincipal}) => {
	const [vSegundo, setVSegundo] = useState("vacío")

	useEffect(() => {
		console.log("Actualizando vSegundo")
	}, [vSegundo])

	const cambiarTiempoSegundo = () => {
		const d = new Date();
		const n = d.toLocaleString();
		setVSegundo(n)
	}

	console.log("Renderizando segundo")
	return (
		<div className="segundo">
			<h2>Segundo nivel: {vSegundo}</h2>
			<h2>Primer nivel: {horaPrimer}</h2>
			<h2>Principal: {horaPrincipal}</h2>
			<button onClick={cambiarTiempoSegundo}>Cambiar tiempo segundo</button>
			<Tercer 
				horaPrincipal={horaPrincipal} 
				horaPrimer={horaPrimer} 
				horaSegundo={vSegundo} 
				mostrarRndPrincipal={mostrarRndPrincipal}/>
		</div>
	)
}

export default Primer