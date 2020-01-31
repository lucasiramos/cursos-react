import React, {useState, useContext} from 'react'

import Movie from './Movie'
import {MovieContext} from './MovieContext'
import {MorfiContext} from './MorfiContext'

const MovieList = () => {
	const [movies,setMovies] = useContext(MovieContext)
	const [morfi,setMorfi] = useContext(MorfiContext)

	return(
		<div>
			{
				movies.map(movie => (
					<Movie name={movie.name} price={movie.price} key={movie.id} />
				))
			}
			<h2>Ahora la comida</h2>
			{
				morfi.map(
					unMorfi => (
						<li>{unMorfi.name}</li>
					)
				)
			}
		</div>
	)
}

export default MovieList