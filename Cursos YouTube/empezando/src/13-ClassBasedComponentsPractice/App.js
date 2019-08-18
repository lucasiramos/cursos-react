import React from 'react'

import Header from './Header'
import Greetings from './Greetings'

class App extends React.Component{
	render(){
		return(
			<div>
				<Header username="Lucas" />
				<Greetings />
			</div>
		)
	}
}

export default App