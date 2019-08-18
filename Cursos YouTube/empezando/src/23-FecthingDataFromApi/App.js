import React from 'react'

// import UnaComida from './UnaComida'

class App extends React.Component{
	constructor(){
		super()

		this.state = {
			loading: false,
			character: {}
		}
	}

	componentDidMount(){
		this.setState(
			{loading: true}
		)
		//fetch("http://aprendiendo-laravel.com.devel:8080/react/comidas") // No funca el CORS
		
		/*fetch("http://swapi.co/api/people/1")
			.then(response => response.json())
			.then(dataFetch => {
				console.log(dataFetch)
			})*/

		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const url = "http://swapi.co/api/people/1"
	
		fetch(proxyurl + url)
			.then(response => response.json())
			.then(contents => {
				console.log(contents)
				this.setState(
					{character: contents, loading: false}
				)
			})
			.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
		//Con esto debería traer un objeto de un personaje de Star Wars, ahora lo hago a mano hasta que venga internet
		//Esto lo debería hacer en el console.log de las promesas
		
		/*let dataFetch = [{id: 1, comida: "Hamburguesa", descripcion: "Pan - Carne - Pan"},
			{id: 2, comida: "Fideos", descripcion: "Es pasta"},
			{id: 3, comida: "Asado", descripcion: "Lo mas rico"},
			{id: 4, comida: "Hígado", descripcion: "Es feo"},
			{id: 5, comida: "Sopa", descripcion: "Guarda que esta caliente"}]*/
		/*let dataFetch = "" //{id: 1, comida: "Hamburguesa", descripcion: "Pan - Carne - Pan"}

		this.setState(
			{character: dataFetch, loading: false}
		)*/
	}

	render(){
		//
		/*let vArrayComidas = [{id: 1, comida: "Hamburguesa", descripcion: "Pan - Carne - Pan"},
			{id: 2, comida: "Fideos", descripcion: "Es pasta"},
			{id: 3, comida: "Asado", descripcion: "Lo mas rico"},
			{id: 4, comida: "Hígado", descripcion: "Es feo"},
			{id: 5, comida: "Sopa", descripcion: "Guarda que esta caliente"}]*/ //this.state.character

		//const LasComidas = vArrayComidas.map(item => <UnaComida key={item.id} info={item} />)

		return(
			<h3>
				{
					this.state.loading 
						? "Loading..." 
						: this.state.character.name + " (" + this.state.character.height + ")" 
				}
			</h3>
		)
	}
}

export default App