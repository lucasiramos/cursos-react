import React from 'react'

function FormComponent (props){
	return(
		<main>
			<form>
				<h1>Formulario:</h1>

				<input type="text" placeholder="Ingrese nombre" value={props.data.nombre} name="nombre" onChange={props.handleChange} /><br /><br />
				<input type="text" placeholder="Ingrese apellido" value={props.data.apellido} name="apellido" onChange={props.handleChange}/><br /><br />
				<input type="text" placeholder="Ingrese edad" value={props.data.edad} name="edad" onChange={props.handleChange}/><br /><br />

				<label>
					<input type="checkbox" name="esPersona" checked={props.data.esPersona} onChange={props.handleChange} />
					¿Es una persona?
				</label><br /><br />

				<select name="destino" onChange={props.handleChange}>
					<option value=""></option>
					<option value="Brasil">Brasil</option>
					<option value="Argentina">Argentina</option>
					<option value="UK">UK</option>
					<option value="Conchinchina">Conchinchina</option>
				</select><br /><br />

				<label>
					<input type="radio" name="genero" value="masculino" checked={props.data.genero === "masculino"} onChange={props.handleChange} /> 
					Masculino
				</label>

				<label>	
					<input type="radio" name="genero" value="femenino" checked={props.data.genero === "femenino"} onChange={props.handleChange} /> 
					Femenino
				</label><br /><br />

				<label>
					<input type="checkbox" name="carne" onChange={props.handleChange} checked={props.data.carne} />Come carne
				</label><br />
				<label>
					<input type="checkbox" name="pollo" onChange={props.handleChange} checked={props.data.pollo} />Come pollo
				</label><br />
				<label>
					<input type="checkbox" name="pescado" onChange={props.handleChange} checked={props.data.pescado} />Come pescado
				</label><br />
				<label>
					<input type="checkbox" name="harinas" onChange={props.handleChange} checked={props.data.harinas} />Come harinas
				</label><br /><br />

				<button>Enviar</button>

				<hr />

				<h3>Información enviada:</h3>
				<p>Nombre: {props.data.nombre}, Apellido: {props.data.apellido}, Edad: {props.data.edad}, Es persona: {props.data.esPersona ? 'Sí' : 'No' }, Género: {props.data.genero}, Destino: {props.data.destino}, Come carne: {props.data.carne ? 'Sí' : 'No' }, Come pollo: {props.data.pollo ? 'Sí' : 'No' }, Come pescado: {props.data.pescado ? 'Sí' : 'No' }, Come harinas: {props.data.harinas ? 'Sí' : 'No' }</p>
			</form>
		</main>
	)
}

export default FormComponent