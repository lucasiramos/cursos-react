import {useContext} from 'react'

import {JugadoresContext} from './context/JugadoresContext'

function Home(){
	const [jugadores, setJugadores] = useContext(JugadoresContext)

	const ultimoAgregado = jugadores[jugadores.length - 1]
	console.log(ultimoAgregado)

	return(
		<>
			<h1>Home</h1>
			Último jugador agregado en Context:<br/>
			<b>{ultimoAgregado.nombre} ({ultimoAgregado.puesto})</b>
		</>
	)
}

export default Home