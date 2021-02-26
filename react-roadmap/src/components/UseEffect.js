import React, { useState, useEffect } from 'react';

const UseEffect = () => {
	const [count, setCount] = useState(0);
	const [anio, setAnio] = useState(2021);

	useEffect(() => {
		console.log("Me ejecuto al inicio y solo al inicio (ComponentWillMount)")

		return () => {
			console.log("Me ejecuto solo al final (componentWillUnmount)")
		}
	}, []);

	useEffect(() => {
		// Actualiza el título del documento usando la API del navegador
		document.title = `You clicked ${count} times`;

		console.log("Use Effect 1")
	}, [count]);

	return(
		<>
			<h1>UseEffect</h1>
			
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>

			<br/><br/>

			<p>Año: {anio}</p>
			<button onClick={() => setAnio(anio + 1)}>
				Aumentar Año
			</button>
		</>
	)
}

export default UseEffect