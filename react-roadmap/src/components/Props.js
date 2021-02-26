import PropsChilds from './PropsChilds'

function Props(){
	const hermanos = ['Tin', 'Noe', 'Pipi']

	return(
		<>
			<h1>Props</h1>

			<PropsChilds name="Lucas" lastName="Ramos" hermanos={hermanos} />
		</>
	)
}

export default Props