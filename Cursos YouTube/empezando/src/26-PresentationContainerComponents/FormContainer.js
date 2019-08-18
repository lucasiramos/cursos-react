import React from 'react'

import FormComponent from './FormComponent'

class FormContainer extends React.Component{
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
			<FormComponent handleChange={this.handleChange} data={this.state} />
		)
	}
}

export default FormContainer