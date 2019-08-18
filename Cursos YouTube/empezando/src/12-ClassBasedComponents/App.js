import React from 'react'

/*function App(){
	return(
		<div>
			<h1>Code goes gere</h1>
		</div>
	)
}*/

class App extends React.Component{
	unMetodo(){
		const date = new Date();
		return date.toString()
	}

	render() {
		const valor = this.unMetodo()

		return(
			<div>
				<h1>Code goes gere (Class!)</h1>
				<p>Fecha: {valor}</p>
			</div>
		)
	}
}

export default App