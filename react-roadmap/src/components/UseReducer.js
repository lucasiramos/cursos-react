import {useReducer} from 'react'

const ACTIONS = {
	INCREMENT: 'increment',
	DECREMENT: 'decrement'
}

function reducer(state, action){
	//Parámetros:
	//		state: el estado que vamos a actualizar
	//		action: acción que vamos a llevar adelante, se la pasamos por dispatch

	/*// Inicialmente puedo probar con esto:
	return { count: state.count + 1 }*/

	switch(action.type){
		case 'increment':
			return { count: state.count + 1 }
			break;

		case 'decrement':
			return { count: state.count - 1 }
			break;

		default: // Siempre conviene tener un case por defecto
			return state
	}
}

function UseReducer(){
	// Toma dos parámetros para empezar:
	//		1) Un Reducer, función que ejecutamos en nuestro estado para obtener un nuevo estado
	//		2) Un valor inicial del estado
	const [state, dispatch] = useReducer(reducer, {count: 0})
	// ^--- Devuelve un array
	//		El primer valor es el state en sí (inicialmente {count: 0})
	//		El segundo valor es dispatch, es lo que llamamos para actualizar el estado, 		se relaciona con la funcion reducer. Dispatch dispara la función reducer, 			la dispatchra (?)

	const increment = () =>{
		/*// Inicialmente puedo probar con esto:
		dispatch()*/

		dispatch({type: ACTIONS.INCREMENT})
	}

	const decrement = () =>{
		dispatch({type: ACTIONS.DECREMENT})
	}

	return(
		<>
			<h1>UseReducer</h1>
			<button onClick={decrement}>-</button>
			<span>{state.count}</span>
			<button onClick={increment}>+</button>
		</>
	)
}

export default UseReducer