import React from 'react'

const api = () => {
	const url = "http://localhost:4741/curso-udemy-php/api-react-ventas/public/api/productos" // "https://randomuser.me/api/?results=10"

	fetch(url)
			.then(response => response.json())
			.then(contents => {
				console.log(contents)
				/*this.setState(
					{character: contents, loading: false}
				)*/
			})
			.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

	return (
		<h1>Esto es un h1</h1>
	)
}

export default api