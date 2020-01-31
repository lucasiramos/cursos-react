import React, {useState, createContext} from 'react'

export const MorfiContext = createContext()

export const MorfiProvider = (props) => {
	const [morfi, setMorfi] = useState([
		{
			name: 'Anvorguesa',
			price: '$110',
			id: 123
		},
		{
			name: 'Pizza',
			price: '$130',
			id: 124
		},
		{
			name: 'Asadito',
			price: '$1000',
			id: 125
		},
		{
			name: 'Empanadas',
			price: '$30',
			id: 124
		},
		{
			name: 'Picada',
			price: '$600',
			id: 125
		},
	])

	return (
		<MorfiContext.Provider value={[morfi, setMorfi]}>
			{props.children}
		</MorfiContext.Provider>
	)
}