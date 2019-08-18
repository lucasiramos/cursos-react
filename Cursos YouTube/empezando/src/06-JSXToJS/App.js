import React from "react"

function App(){
	const Nombre = "Lucas"
	const Apellido = "Ramos"
	
	const date = new Date()
	const hours = date.getHours()
	let mensaje

	if(hours < 12){
		mensaje = "Buenos días"
	}else if(hours >= 12 && hours < 19){
		mensaje = "Buenas tardes"
	}else{
		mensaje = "Buenas noches"
	}

	return(
		<div>
			<h1>Hola {Nombre + " " + Apellido}</h1>
			<h2>Otra manera de poner {`${Nombre} ${Apellido}`}</h2>
			<h3>Son las {date.getHours() % 12} en punto!, ¡{mensaje}!</h3>

		</div>
	)
}

export default App