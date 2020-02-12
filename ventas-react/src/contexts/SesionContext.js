import React, {useState, createContext} from 'react'

export const SesionContext = createContext()

export const SesionProvider = (props) => {
	const [estadoSesion, setEstadoSesion] = useState({
		estado: 0,
		rol: ""
	})

	return (
		<SesionContext.Provider value={[estadoSesion, setEstadoSesion]}>
			{props.children}
		</SesionContext.Provider>
	)
}