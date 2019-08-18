import React from 'react'

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			nombre: "",
			apellido: "",
			edad: "",
			esPersona: false,
			genero: "",
			destino: "",
			ubicacion: "",
			carne: false,
			pollo: false,
			pescado: false,
			harinas: false
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		const {name, value, type, checked} = event.target
		type === "checkbox" ? 
			this.setState({[name]:checked}) 
			: this.setState({[name]:value})
	}

	render(){
		return(
			<main>
				<form>
					<h1>Formulario:</h1>

					<input type="text" placeholder="Ingrese nombre" value={this.state.nombre} name="nombre" onChange={this.handleChange} /><br /><br />
					<input type="text" placeholder="Ingrese apellido" value={this.state.apellido} name="apellido" onChange={this.handleChange}/><br /><br />
					<input type="text" placeholder="Ingrese edad" value={this.state.edad} name="edad" onChange={this.handleChange}/><br /><br />

					<label>
						<input type="checkbox" name="esPersona" checked={this.state.esPersona} onChange={this.handleChange} />
						¿Es una persona?
					</label><br /><br />

					<select name="destino" onChange={this.handleChange}>
						<option value=""></option>
						<option value="Brasil">Brasil</option>
						<option value="Argentina">Argentina</option>
						<option value="UK">UK</option>
						<option value="Conchinchina">Conchinchina</option>
					</select><br /><br />

					<label>
						<input type="radio" name="genero" value="masculino" checked={this.state.genero === "masculino"} onChange={this.handleChange} /> 
						Masculino
					</label>

					<label>	
						<input type="radio" name="genero" value="femenino" checked={this.state.genero === "femenino"} onChange={this.handleChange} /> 
						Femenino
					</label><br /><br />

					<label>
						<input type="checkbox" name="carne" onChange={this.handleChange} checked={this.state.carne} />Come carne
					</label><br />
					<label>
						<input type="checkbox" name="pollo" onChange={this.handleChange} checked={this.state.pollo} />Come pollo
					</label><br />
					<label>
						<input type="checkbox" name="pescado" onChange={this.handleChange} checked={this.state.pescado} />Come pescado
					</label><br />
					<label>
						<input type="checkbox" name="harinas" onChange={this.handleChange} checked={this.state.harinas} />Come harinas
					</label><br /><br />

					<button>Enviar</button>

					<hr />

					<h3>Información enviada:</h3>
					<p>Nombre: {this.state.nombre}, Apellido: {this.state.apellido}, Edad: {this.state.edad}, Es persona: {this.state.esPersona ? 'Sí' : 'No' }, Género: {this.state.genero}, Destino: {this.state.destino}, Come carne: {this.state.carne ? 'Sí' : 'No' }, Come pollo: {this.state.pollo ? 'Sí' : 'No' }, Come pescado: {this.state.pescado ? 'Sí' : 'No' }, Come harinas: {this.state.harinas ? 'Sí' : 'No' }</p>
				</form>
			</main>
		)
	}
}

export default App