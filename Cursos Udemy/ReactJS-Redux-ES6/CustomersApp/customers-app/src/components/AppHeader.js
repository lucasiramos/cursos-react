import React from 'react'

function AppHeader(props){
	return (
		<div>
			<div className="app-header">
				<h1>{props.title}</h1>
			</div>
		</div>
	)
}

export default AppHeader