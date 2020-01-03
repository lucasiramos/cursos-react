import React, {useState, useEffect} from 'react'

const App = props => {
	/*const [state, setState] = useState({
		nombre: props.nombre,
		apellido: props.apellido,
		tiempo: props.tiempo
	})

	const cambiarHora = pHorita => {
		setState({ ...state, tiempo: pHorita })
	}

	const cambiarNombre = pNuevoNombre => {
		setState({ ...state, nombre: pNuevoNombre })	
	}

	const cambiarApellido = () => {
		setState({ ...state, apellido: 'Ramitos' })	
	}*/ // Esto funca con lo de abajo! // Son Hooks, pero con ...state, otra manera de hacerlo es con:

	const [stNombre, definirStNombre] = useState(props.nombre)
	const [stApellido, definirStApellido] = useState(props.apellido)
	const [stTiempo, definirStTiempo] = useState(props.tiempo)

	const cambiarNombre = pNombre => {
		definirStNombre(pNombre)
	}

	const cambiarApellido = () => {
		definirStApellido('Ramitos')
	}

	const cambiarHora = pTiempo => {
		definirStTiempo(pTiempo)
	}

	/*componentDidMount(){

	}*/ // En lugar de componentDidMount() se usa useEffect, hay que importarlo arriba

	useEffect(() => {
		// Se ejecuta despues de cada vez que se actualiza el Virtual DOM, salvo que le pases como parametro los dos corchetes
		console.log("Usando efectos!")
	}, []);

	//useEffect se ejecuta cada vez que se actualiza el Virtual DOM, con el segundo parámetro le decimos a React que ejecute useEffect cada vez que se actualizan esas variables. Si le pasamos un [] como segundo parámetro no tiene nada que actualizar, entonces tiene la misma funcionalidad que componentDidMount. Si le paso ', [stTiempo]' useEffect se ejecuta cada vez que clickeo en algún cambio de hora, en este ejemplo.

	//Puedo tener mas de un useEffect

	return(
		<div>
			{/*<h1>React Hooks {state.nombre} {state.apellido}. Son las {state.tiempo}</h1>
			<button onClick={cambiarHora.bind(this,'08:30')}>08:30</button>
			<button onClick={cambiarHora.bind(this,'14:00')}>14:00</button>
			<button onClick={cambiarNombre.bind(this,'Luquitas')}>Luquitas</button>
			<button onClick={cambiarApellido.bind(this)}>Apellido</button>*/}

			<h1>React Hooks {stNombre} {stApellido}. Son las {stTiempo}</h1>
			<button onClick={cambiarHora.bind(this,'08:30')}>08:30</button>
			<button onClick={cambiarHora.bind(this,'14:00')}>14:00</button>
			<button onClick={cambiarNombre.bind(this,'Luquitas')}>Luquitas</button>
			<button onClick={cambiarApellido.bind(this)}>Apellido</button>
		</div>
	)
}

export default App