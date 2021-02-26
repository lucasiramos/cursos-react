import withCounter from './withCounter'

function ClickTimes(props){
	const {count, incrementCount} = props

	return(
		<>
			<h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
		</>
	)
}

/*Le puedo pasar parámetros a la función enhanzadora*/
export default withCounter(ClickTimes, 10)