import React from "react"

import ContactCard from "./ContactCard"

function App(){
	return(
		<div>
			<ContactCard contact={{imgSrc:"08-Imagenes/Arg.jpg", titulo:"Argentina", descripcion:"Logo de la Argentina"}} />
			<ContactCard contact={{imgSrc:"08-Imagenes/Argcvs.jpg", titulo:"Argentina, con vos siempre", descripcion:"Logo de la Argentina pero con un mensaje cheto"}} />
			<ContactCard contact={{imgSrc:"08-Imagenes/INTA.jpg", titulo:"INTA", descripcion:"Logo de la Institución"}} />
			<ContactCard contact={{imgSrc:"08-Imagenes/Ministerio.jpg", titulo:"Ministerio", descripcion:"Logo del Minsterio de Agricultura, Pesca y Ganadería"}} />
			<ContactCard contact={{imgSrc:"08-Imagenes/RIAN.jpg", titulo:"RIAN", descripcion:"Red de Información Agropecuaria Nacional"}} />
		</div>
	)
}

export default App