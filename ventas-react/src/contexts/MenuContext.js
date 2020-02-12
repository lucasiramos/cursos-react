import React, {useState, createContext} from 'react'

export const MenuContext = createContext()

export const MenuProvider = (props) => {
	const [menuElegido, setMenuElegido] = useState(0)

	return (
		<MenuContext.Provider value={[menuElegido, setMenuElegido]}>
			{props.children}
		</MenuContext.Provider>
	)
}