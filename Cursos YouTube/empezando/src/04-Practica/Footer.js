import React from "react"

function Footer(){
	return(
		<div>
			<h4>This is my footer</h4>

			<br/><br/>
			<b>Importante!</b> Pasos a seguir para publicar en servidor Apache (Funca!)

			<ul>
				<li>Agregar al package.json la siguiente entrada: "homepage": "http://localhost:4741/pruebas/react/", (o donde sea que lo vayamos a publicar)</li>
				<li>En linea de comandos del Proyecto React correr <b>npm run build</b></li>
				<li>Copiar todo el contenido de la carpeta <b>Build</b> al lugar donde queramos publicar la app, por ejemplo: "C:\xampp\htdocs\pruebas\react"</li>
				<li>Buscar en httpd.conf Directory /var/www/html y chequear que este <b>AllowOverride All</b></li>
				<li>Por último, generar un archivo ".htaccess" con el siguiente contenido:</li>
			</ul>
			<i>Options -MultiViews<br/>
			RewriteEngine On<br/>
			RewriteCond %{'{'}REQUEST_FILENAME{'}'} !-f<br/>
			RewriteRule ^ index.html [QSA,L]</i>

			<br/><br/>
			<b>Listorti!</b>
		</div>		
	)
}

export default Footer