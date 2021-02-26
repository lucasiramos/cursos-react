import ClickTimes from './hoc/ClickTimes'
import HoveredTimes from './hoc/HoveredTimes'

function HOC(){
	/*
	Ojo cuando mando props a un componente con HOC, en este caso apellido.
	Las props son pasadas al HOC, no al componente ClickTimes en este caso

	Como HOC funciona como intermediario, tengo que retransmitirle las props si quiero tener un componente enhanced con props

	(Ver solución en /hoc/withCounter.js)
	*/

	return(
		<>
			<h1>HOC</h1>
			<ClickTimes apellido="Ramos"/>
			<HoveredTimes/>
			<hr/>
			<p>withCounter toma como parámetro un componente y le agrega funcionalidad mediante los props que le pasa.</p>
		</>
	)
}

export default HOC