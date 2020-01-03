import React from 'react'

class App extends React.Component{
	state = {
		texto: ""
	} // --> También me deshice del constructor, ver si estos cambios aplican en todas las versiones!

	/*constructor(){
		super()

		this.state = {
			texto: ""
		}

		//Con la Arrox Fx de abajo no necesito de esta línea:
		//this.handleChanges = this.handleChanges.bind(this)
		//Cambiar de esto:'handleChanges(event){' a esto: 'handleChanges = (event) => {'
	}*/

	//Arrow Fx
	handleChanges = (event) => {
		const {name, value} = event.target
		this.setState({[name]:value})
	}

	render(){
		return(
			<div>
				<input type="text" name="texto" value={this.state.texto} onChange={this.handleChanges} placeholder="Ingrese texto" />
				<br /><br />
				<h1>{this.state.texto}</h1>
			</div>
		)
	}
}

export default App