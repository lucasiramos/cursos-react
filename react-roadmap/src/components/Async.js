import {useState, useEffect} from 'react'

function Async(){
	const [ditto, setDitto] = useState({})

	const fetchPokemon = async (id) => {
		try{
			const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
			const data = await res.json()

			//console.log(data)
			setDitto(data)
		}catch(err){
			console.log(err)
		}
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			fetchPokemon()
		}, 3000);
		
		return () => clearTimeout(timer);
	}, []);

	return (
		<>

			<div>
				<h1>Async</h1>
				{
					Object.keys(ditto).length > 0 
						? 
							<>
								<p><b>Altura: </b> {ditto.height}</p>
								<p><b>Peso: </b> {ditto.weight}</p>
							</>
						: 
							<span>Cargando...</span>
				}
			</div>
		</>
	)
}

export default Async