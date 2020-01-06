import React, { useState, useEffect } from 'react'

import './estilos.css'

const Tercer = ({horaPrincipal, horaPrimer, horaSegundo, mostrarRndPrincipal}) => {
	const [vTercer, setVTercer] = useState("vacío")
	const [vRnd, setVRnd] = useState(0)

	useEffect(() => {
		console.log("Actualizando vTercer")
	}, [vTercer])

	const cambiarTiempoTercer = () => {
		const d = new Date();
		const n = d.toLocaleString();
		setVTercer(n)
	}

	const generarRnd = () => {
		const rnd = Math.floor(Math.random() * 100)

		setVRnd(rnd)
		mostrarRndPrincipal(rnd)
	}

	console.log("Renderizando tercer")
	return (
		<div className="tercer">
			<h2>Tercer nivel: {vTercer}</h2>
			<h2>Segundo nivel: {horaSegundo}</h2>
			<h2>Primer nivel: {horaPrimer}</h2>
			<h2>Principal: {horaPrincipal}</h2>
			<button onClick={cambiarTiempoTercer}>Cambiar tiempo tercer</button>&nbsp;
			<button onClick={generarRnd}>Generar valor aleatorio</button>
			<div className="random">
				Random tercer: {vRnd}
			</div>
		</div>
	)
}

export default Tercer