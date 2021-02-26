function EsSeis(){

	// ------------------------------------------------------
	// Objects literals
	function getBook(title, author){
		return {
			title,
			author
		}

		//(el nombre de la variable dentro del objeto es igual al parámetro)
	}
	const book = getBook('Harry Potter', 'JK')
	console.log(book)
	// ------------------------------------------------------

	// ------------------------------------------------------
	// Destructuring
	const list = {
		name: 'Shopping list',
		data: ['Milk', 'Cow']
	}
	const {name, data} = list
	// ------------------------------------------------------

	// ------------------------------------------------------
	// Array Fx
	const shoppingList = ['Milk', 'Cow', 'Eggs', 'Bananas', 'Chocolate']

	// forEach
	console.log("----------------------------------")
	console.log("Array ForEach")

	shoppingList.forEach((product, index) => {
		console.log(`${(index + 1)}: ${product}`)
	})

	// Map
	console.log("----------------------------------")
	console.log("Map")

	const newlist = shoppingList.map(item => {
		return item + " new"
	})
	// ^--- Es lo mismo que: const newlist = shoppingList.map(item => item + " new") // <-- reducido
	console.log(newlist)

	// Filter
	console.log("----------------------------------")
	console.log("Filter")

	const filteredList = shoppingList.filter(item => {
		return item === "Eggs" // Devuelvo solo huevos
		// return item !== "Eggs" // Devuelvo todo menos huevos
	})

	console.log(filteredList)
	// ------------------------------------------------------	

	// ------------------------------------------------------
	// Constructor functions (para crear objetos)

	return(
		<>
			<h1>Es Seis</h1>
			<h2>Objects literals</h2>
			<p>El libro es: {book.title}.</p>

			<h2>Destructuring</h2>
			<p>Variables destructuradas (?): {name}/{`${data[0]} viene de la ${data[1]}`}</p>
		</>
	)
}

export default EsSeis