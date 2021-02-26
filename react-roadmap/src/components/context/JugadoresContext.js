import React, {useState, createContext} from 'react'

// Creo un Context, es lo que van a usar los componentes para acceder a la info del contexto
export const JugadoresContext = createContext()

// Son los datos en sí mismo, también retorno el proveedor, para envolver a <App /> o lo que sea que fuere
export const JugadoresProvider = (props) => {
	const [jugadores, setJugadores] = useState([
		{
			nombre: 'Martín Palermo',
			puesto: 'Delantero',
			goles: 225
		},
		{
			nombre: 'Juan Román Riquelme',
			puesto: 'Enganche',
			goles: 100
		},
		{
			nombre: 'Esteban Andrada',
			puesto: 'Arquero',
			goles: 0
		}
	])

	return (
		<JugadoresContext.Provider value={[jugadores, setJugadores]}>
			{props.children}
		</JugadoresContext.Provider>
	)
}