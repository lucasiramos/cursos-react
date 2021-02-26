import {useState, useEffect, useRef} from 'react'

function UseRef(){
	const [name, setName] = useState('')
	const vecesRender = useRef(1)

	/*
	// Esto provoca un bucle infinito, porque al pasar por el useEffect cambia nuevamente el estado y hace que se renderice todo nuevamente. Por eso se puede implementar useRef, que es como useState, pero al cambiar no hace que se renderice todo de nuevo

	const [vecesRender, setVeces] = useState(0)

	useEffect(() => {
		setVeces(vecesRender + 1)
	})*/
	
	console.log("Render!")
	useEffect(() => {
		vecesRender.current = vecesRender.current + 1
	})

	/*
	SPOILER, lo podría haber solucionado con:
	const [vecesRender, setVeces] = useState(0)
	useEffect(() => {
		setVeces(vecesRender + 1)
	}, [name])

	NOT SPOILER, es util! Si necesito actualizar algún estado del componente que no requiera renderización, puedo usar UseRef, ya que si lo hago del modo SPOILER me lo renderiza dos veces, cada vez que ingreso una letra. Una por cada tecla que presiono, y otra porque actualizo vecesRender	
	*/

	return(
		<>
			<h1>UseRef</h1>
			<input value={name} onChange={e => setName(e.target.value)} />
			<div>Nombre: {name}</div>
			<div>vecesRender: {vecesRender.current}</div>
		</>
	)
}

export default UseRef