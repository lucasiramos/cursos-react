import React from 'react'

class App extends React.Component{
	constructor(){
		super()
		this.state = {}
	}

	/*componentDidMount(){
		//Se ejecuta solo una vez al principio, no cuando re-renderiza
		//Se suele usar para buscar datos a alguna API
	}

	componentWillReceiveProps(nextProps){
		//Cuando un componente recibe Props de un componente Padre. No solo la primera vez, sino también por ejemplo, cuando un padre cambia sus Props y se los manda a los hijos

		//nextProps son los nuevos Props recibidos, se puede poner cualquier nombre, solo es una convención

		//Ouch.... deprecated since 16.3 // desde v17 se llama UNSAFE_componentWillReceiveProps // No usar (o ver por las dudas...)
	}

	shouldComponentUpdate(nextProps, nextState){
		//Le decimos a React, con alguna lógica, cuándo debería actualizarse un componente. Por defecto se actualiza siempre por las dudas, pero puede ser costoso en cuanto a recursos.

		//return true si queremos que se actualice, y false si no.
	}

	componentWillUnmount(){
		// Quitar los events listener que pusimos en componentDidMount, por ejemplo.
		// Limpiar los datos y el código antes que el componente desaparezca
	}

	static getDerivedStateFromProps(props, state){
		//No olvidar de poner la palabra static
		//Devuelve el nuevo y actualizado estado, según los Props
		//No es un método de ciclo de vida muy usado
	}

	getSnapshotBeforeUpdate(){
		//Crea una copia de como estan las cosas actualmente
		//No es un método de ciclo de vida muy usado
	}*/

	render(){
		return(
			<p>Gimme some good news!</p>
		)
	}
}

export default App