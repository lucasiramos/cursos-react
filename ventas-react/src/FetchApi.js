	const url = "http://localhost:4741/curso-udemy-php/api-react-ventas/public/api/productos" // sucursales

	fetch(url).then(function(response) {
		console.log(response.status);
		response.json().then(function(contents) {
			console.log(contents)
		});
	});