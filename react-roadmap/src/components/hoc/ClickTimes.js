import withCounter from './withCounter'

function ClickTimes(props){
	const {count, incrementCount, apellido} = props

	/*
	En este caso ClickTimes recibe la prop apellido, que HoveredTimes no recibió (aunque sea un componente enhanced de withCounter)
	*/

	return(
		<>
			<button onClick={incrementCount}>{apellido} Clicked {count} times</button>
		</>
	)
}

/*Le puedo pasar parámetros a la función enhanzadora*/
export default withCounter(ClickTimes, 5)