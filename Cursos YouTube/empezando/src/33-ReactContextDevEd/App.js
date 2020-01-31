import React from 'react'

import MovieList from './MovieList'
import Nav from './Nav'
import {MovieProvider} from './MovieContext'
import {MorfiProvider} from './MorfiContext'
import AddMovie from './AddMovie'

const App = () => {
	return(
		<MovieProvider>
			<MorfiProvider>
				<div>
					<Nav />
					<AddMovie />
					<MovieList />
				</div>
			</MorfiProvider>
		</MovieProvider>
	)
}

export default App