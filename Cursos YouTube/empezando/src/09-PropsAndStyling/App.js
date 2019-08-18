import React from "react"

import Joke from "./Joke"

function App(){
	return(
		<div>
			<Joke jokeContent={{answer: "Sin pregunta"}} />
			<Joke jokeContent={{question: "Pregunta 1", answer: "Respuesta 1"}} />
			<Joke jokeContent={{question: "Pregunta 2", answer: "Respuesta 2"}} />
			<Joke jokeContent={{question: "Pregunta 3", answer: "Respuesta 3"}} />
			<Joke jokeContent={{question: "Pregunta 4", answer: "Respuesta 4"}} />
		</div>
	)
}

export default App