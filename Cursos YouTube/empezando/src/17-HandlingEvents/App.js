import React from 'react'

class App extends React.Component{
	constructor(){
		super()
	}

	render(){
		return(
			<div>
				<h1 onMouseOver={ MouseOverTitulo }>A continuación un botón para clickear</h1>
				<button onClick={ cmdClick }>¡Click aquí!</button>
				<br/><br/>
				<button onClick={ () => alert("Arrow Fx!") }>Arrow 8)</button>
				<br/><br/>
				<a href="https://reactjs.org/docs/events.html#supported-events">Listado de eventos posible en React</a>
			</div>
		)
	}
}

function cmdClick(){
	alert("Fui clickeado chei")
}

function MouseOverTitulo(){
	console.log("Mouse over!!")
}

export default App