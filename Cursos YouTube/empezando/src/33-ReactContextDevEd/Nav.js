import React, {useContext} from 'react'

import {MovieContext} from './MovieContext'
import {MorfiContext} from './MorfiContext'

const Nav = () => {
	const [movies, setMovies] = useContext(MovieContext)
	const [morfi, setMorfi] = useContext(MorfiContext)

	return(
		<div>
			<h1>Lista de Lucas</h1>
			<p>Cantidad de películas: {movies.length}, cantidad de morfi: {morfi.length}</p>
			<hr />
		</div>
	)
}

export default Nav