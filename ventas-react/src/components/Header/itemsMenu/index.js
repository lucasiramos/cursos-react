import {useContext} from 'react'

import {SesionContext} from '../../../contexts/SesionContext'

const TraeItemsMenu = () =>{
	const [sesion,setSesion] = useContext(SesionContext)

	if(sesion.estado === 0){
		// Deslogueado
		return (
			{
				ancho: 750,
				items: 
					[
						{
							id: "1",
							texto: "¿Qué es esto?",
							url: "/",
							icono: "info"
						},
						{
							id: "2",
							texto: "¡Quiero jugar!",
							url: "/login",
							icono: "jugar"
						},
						{
							id: "3",
							texto: "Contacto",
							url: "/contacto",
							icono: "contacto"
						}
					]
			}
		)
	}else{
		// Logueado
		switch(sesion.rol){
			case "Admin":
				return (
					{
						ancho: 900,
						items: 
							[
								{
									id: "1",
									texto: "Admin 1",
									url: "/",
									icono: "info"
								},
								{
									id: "2",
									texto: "Admin 2",
									url: "/login",
									icono: "jugar"
								},
								{
									id: "3",
									texto: "Admin 3",
									url: "/contacto",
									icono: "contacto"
								}
							]
					}
				)
				break;
			case "Vendedor":
				return (
					{
						ancho: 800,
						items: 
							[
								{
									id: "1",
									texto: "Vendedor 1",
									url: "/",
									icono: "info"
								},
								{
									id: "2",
									texto: "Vendedor 2",
									url: "/login",
									icono: "jugar"
								},
								{
									id: "3",
									texto: "Vendedor 3",
									url: "/contacto",
									icono: "contacto"
								}
							]
					}
				)
				break;
			case "Cliente":
				return (
					{
						ancho: 800,
						items: 
							[
								{
									id: "1",
									texto: "Cliente 1",
									url: "/",
									icono: "info"
								},
								{
									id: "2",
									texto: "Cliente 2",
									url: "/login",
									icono: "jugar"
								},
								{
									id: "3",
									texto: "Cliente 3",
									url: "/contacto",
									icono: "contacto"
								}
							]
					}
				)
				break;
		}
	}			
}

export default TraeItemsMenu