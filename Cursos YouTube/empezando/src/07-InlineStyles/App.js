	import React from "react"

function App(){
	const Nombre = "Lucas"
	const Apellido = "Ramos"
	
	const date = new Date(2019,11,11,18)
	const hours = date.getHours()
	let mensaje

	const estilosMensaje = {
		fontSize: 20
	}

	if(hours < 12){
		mensaje = "Buenos días"
		estilosMensaje.color = "#04756F"
	}else if(hours >= 12 && hours < 19){
		mensaje = "Buenas tardes"
		estilosMensaje.color = "#891A43"
	}else{
		mensaje = "Buenas noches"
		estilosMensaje.color = "#D90000"
	}

	const styles={
		color: "#FF0030",
		backgroundColor: "#FFCC30", // NO se usan guiones, se reemplaza por Camel Case
		paddingTop: 30,				// background-color -> backgroundColor
		fontSize: "55px"
	}

	return(
		<div>
			<h1 style={styles}>Holaaaa {Nombre + " " + Apellido}</h1>
			<h2>Otra manera de poner {`${Nombre} ${Apellido}`}</h2>
			<h3>Son las {date.getHours() % 12} en punto!, <span style={estilosMensaje}>¡{mensaje}!</span></h3>

		</div>
	)
}

export default App