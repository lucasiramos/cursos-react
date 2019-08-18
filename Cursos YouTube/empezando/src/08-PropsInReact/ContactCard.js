import React from "react"

function ContactCard(props){
	return(
		<div className="div-logo-8">
			<img src={props.contact.imgSrc} />
			<h3>{props.contact.titulo}</h3>
			<p>Descripción: {props.contact.descripcion}</p>
			<hr/>
		</div>
	)
}

export default ContactCard