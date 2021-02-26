function PropsChilds({name, lastName, hermanos}){
	return(
		<>
			<h2>{`${lastName} ${name}`}</h2>
			<ul>
				{hermanos.map((item, index) => <li key={index}>{item}</li>)}
			</ul>
		</>
	)
}

export default PropsChilds