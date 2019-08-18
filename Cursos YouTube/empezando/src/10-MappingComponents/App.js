import React from "react"

import Joke from "./Joke"
import JokesData from "./JokesData"

function App(){
	/*const jokeComponents = JokesData.map(function(joke){
		return(
			<Joke key={joke.id} jokeContent={{question: joke.pregunta, answer: joke.respuesta}} /> 
		)
	})*/
	// Eso es lo mismo que: 

	const jokeComponents = JokesData.map(joke => <Joke key={joke.id} jokeContent={{question: joke.pregunta, answer: joke.respuesta}} />)

	return(
		<div>
			{jokeComponents}
		</div>
	)
}

export default App