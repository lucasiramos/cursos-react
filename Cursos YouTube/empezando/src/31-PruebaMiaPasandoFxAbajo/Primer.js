import React, { useState, useEffect } from 'react'

import Segundo from './Segundo'

import './estilos.css'

const Primer = ({horaPrincipal, mostrarRndPrincipal}) => {
	const [vPrimer, setVPrimer] = useState("vacío")
	const [vRnd, setVRnd] = useState(0)

	useEffect(() => {
		console.log("Actualizando vPrimer")
	}, [vPrimer])

	const cambiarTiempoPrimer = () => {
		const d = new Date();
		const n = d.toLocaleString();
		setVPrimer(n)
	}

	const generarRnd = () => {
		const rnd = Math.floor(Math.random() * 100)

		setVRnd(rnd)
		mostrarRndPrincipal(rnd)
	}

	console.log("Renderizando primer")
	return (
		<div className="primer">
			<h2>Primer nivel: {vPrimer}</h2>
			<h2>Principal: {horaPrincipal}</h2>
			<button onClick={cambiarTiempoPrimer}>Cambiar tiempo primer</button>&nbsp;
			<button onClick={generarRnd}>Generar valor aleatorio</button>
			<div className="random">
				Random primer: {vRnd}
			</div>
			<Segundo 
				horaPrincipal={horaPrincipal} 
				horaPrimer={vPrimer} 
				mostrarRndPrincipal={mostrarRndPrincipal}/>
		</div>
	)
}

export default Primer