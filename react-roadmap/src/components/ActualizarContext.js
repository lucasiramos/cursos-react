import {useState, useContext} from 'react'

// Llamo al Context
import {JugadoresContext} from './context/JugadoresContext'

function ActualizarContext(){
	// Con la definición de este estado traigo los datos y la función desde el Context global
	const [jugadores, setJugadores] = useContext(JugadoresContext)
	const [nuevoJugador, setNuevoJugador] = useState({
		nombre: '',
		puesto: '',
		goles: 0
	})

	const handleChange = evt => {
		const value = evt.target.value;
		
		setNuevoJugador({
			...nuevoJugador,
			[evt.target.name]: value
		});
	}

	const handleAgregarJugador = () =>{
		if(nuevoJugador.nombre.trim() == ''){
			alert("Complete el nombre")
		}else{
			if(nuevoJugador.puesto.trim() == ''){
				alert("Complete la posición")
			}else{
				// Agrego
				setJugadores([...jugadores, nuevoJugador])

				// Blanqueo estado
				setNuevoJugador({
					nombre: '',
					puesto: '',
					goles: 0
				})
			}
		}
	}

	return (
		<>
			<h1>Actualizo Context</h1>

			<h3>Jugadores:</h3>
			<ul>
				{jugadores.map((item, index) => <li key={index}>{item.nombre} ({item.puesto}) - {item.goles} goles.</li>)}
			</ul>
			<p>////////////////////////////////////////////////////////////////////////////
			</p>
			<h4>Agregar jugador:</h4>
			<span>Nombre:&nbsp;</span>
			<input type="text" name="nombre" value={nuevoJugador.nombre} onChange={handleChange} /><br/>

			<span>Posición:&nbsp;</span>
			<input type="text" name="puesto" value={nuevoJugador.puesto} onChange={handleChange} /><br/>

			<span>Goles:&nbsp;</span>
			<input type="text" name="goles" value={nuevoJugador.goles} onChange={handleChange} /><br/>

			<button onClick={handleAgregarJugador}>Agregar jugador!</button>
			<br/><br/>
		</>
	)
}	

export default ActualizarContext