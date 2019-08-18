import React from 'react'

import Conditional from './Conditional'

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			isLoading: true
		}
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		}, 1500)
	}

	render(){
		return(
			<div>
				{
					this.state.isLoading 
						? <h4>Cargando...</h4>
						: <Conditional />
				}
			</div>
		)
	}
}

export default App