import React from 'react'

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			count: 0,
			texto: "[vacío]"
		}

		this.handleClick = this.handleClick.bind(this)
		this.handleClickTexto = this.handleClickTexto.bind(this)
	}

	handleClick(){
		this.setState(estadoAnterior => {
			return{
				count: estadoAnterior.count + 1
			}
		})
	}

	handleClickTexto(){
		this.setState(textoAnterior => {
			return{
				texto: "Anda a saber como busco un elemento..."
			}
		})
	}

	render(){
		return(
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={ this.handleClick }>Sumar</button>
				<br /><br />
				<h3>Estado texto: {this.state.texto}</h3>
				<input type="text" />
				<button onClick={ this.handleClickTexto }>Cambiar texto</button>
			</div>
		)
	}
}

export default App