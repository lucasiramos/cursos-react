import React from 'react'

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			count: 0
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		// this.setState({ count: 1 }) // De esta forma se cambia estáticamente solo la primera vez
		this.setState(prevState => {
			return {
				count: prevState.count + 1
			}
		}) 
	}

	render(){
		return(
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={ this.handleClick }>change!</button>
			</div>
		)
	}
}

export default App