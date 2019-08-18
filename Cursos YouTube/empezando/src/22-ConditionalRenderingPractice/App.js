import React from 'react'

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			isLoggedIn: true
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState(prevState => {
			return{
				isLoggedIn: !prevState.isLoggedIn
			}
		})
	}

	render(){
		return(
			<div>
				{
					this.state.isLoggedIn
						? <h1>Estas logueado</h1>
						: <h1>No estas logueado</h1>
				}
				<button onClick={this.handleClick}>{this.state.isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión' }</button>
			</div>
		)
	}
}

export default App