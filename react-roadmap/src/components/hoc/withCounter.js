import React, {useState} from 'react'

/*Acá recibo los parámetros para hacer el enhance*/
const withCounter = (WrappedComponent, incrementNumber) => {
	function WithCounter (props){
		const [count, setCount] = useState(0)

		const incrementCount = () => {
			setCount(count + incrementNumber)
		}

		/*
		Solución:
		Tengo que recibir las props en function WithCounter (props){
		y después pasarlas con spread operator en el return

		(ver /hoc/ClickTimes.js)
		*/

		return(
			<WrappedComponent 
				count={count} 
				incrementCount={incrementCount}
				{ ... props} />
		)
	}

	return WithCounter
}

export default withCounter