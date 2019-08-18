import React from 'react'

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			firstName: "",
			lastName: "",
			isFriendly: true,
			gender: "",
			favColor: ""
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		const {name, value, type, checked} = event.target
		type === "checkbox" ? this.setState({[name]: checked})	 : this.setState({[name]: value})
	}

	handleSubmit(){
		
	}
	// Otra manera de hacerlo (?) // Esto es para los textos
	/*handleChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}*/

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" value={this.state.firstName} name="firstName" placeholder="First name" onChange={this.handleChange} /> <br /><br />
				<input type="text" value={this.state.lastName} name="lastName" placeholder="Last name" onChange={this.handleChange} /> <br /><br />
				<h1>{this.state.firstName} {this.state.lastName}</h1>
				<textarea value="Valor por defecto" onChange={this.handleChange}/> <br /><br />
				
				<label>
					<input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange}/>

					Is friendly?
				</label>

				<br /><br />

				<label>
					<input 
						type="radio" 
						name="gender"
						value="male"
						checked={this.state.gender === "male"} 
						onChange={this.handleChange}/> Male
				</label>
				<label>
					<input 
						type="radio" 
						name="gender"
						value="female" 
						checked={this.state.gender === "female"} 
						onChange={this.handleChange}/> Female
				</label>
				<h3>You are a {this.state.gender}</h3>

				<select value={this.state.favColor} onChange={this.handleChange} name="favColor">
					<option value="blue">Azul</option>
					<option value="red">Rojo</option>
					<option value="yellow">Amarillo</option>
					<option value="green">Verde</option>
				</select>
				
				<h3>Fav Color: {this.state.favColor}</h3>

				<button>Submit</button>
			</form>
		)
	}
}

export default App