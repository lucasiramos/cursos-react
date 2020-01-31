import React, {useState, createContext} from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
	const [movies, setMovies] = useState([
		{
			name: 'Harry Potter',
			price: '$10',
			id: 123
		},
		{
			name: 'Matrix',
			price: '$13',
			id: 124
		},
		{
			name: 'Ico, el cavaliente ballito',
			price: '$1000',
			id: 125
		},
	])

	return (
		<MovieContext.Provider value={[movies, setMovies]}>
			{props.children}
		</MovieContext.Provider>
	)
}