import React from "react"

function Joke(props){
	return(
		<div>
			<h3 style={{display: props.jokeContent.question ? "block": "none"}}>Pregunta: {props.jokeContent.question}</h3>
			<h3 style={{color: props.jokeContent.question ? "black": "blue"}}>Respuesta: {props.jokeContent.answer}</h3>
			<hr />
		</div>
	)
}

export default Joke