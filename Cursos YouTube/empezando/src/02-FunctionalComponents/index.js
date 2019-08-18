import React from "react"
import ReactDOM from "react-dom"

function MyInfo(){
	return(
		<div>
			<h1>Lucas Ramos</h1>
			<p>Este es un parrafito</p>
			<ul>
				<li>Listadito 1</li>
				<li>Listadito 2</li>
				<li>Listadito 3</li>
			</ul>
		</div>
	)
}

ReactDOM.render(
	<MyInfo />
	,
	document.getElementById('root')
)