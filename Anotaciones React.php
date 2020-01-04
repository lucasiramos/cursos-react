<!-- 

Pendientes para revisar:

Ver bien (y armar ejemplo) de burbujeo de funciones/acciones

React.memo()
React.Fragment (?)

reacttraining.com

React Router
	Ver como poner más de un parámetro

	Cuando llamo al constructor (en caso de usarlo en un Class based component), tengo que armar el constructor así (con los props como parámetros):
		export default class [NOMBRE_COMPONENTE] extends Component{
			constructor(props){
				super(props)

				console.log(this.props)
			}

Forms
	https://reactjs.org/docs/forms.html
	Librería Formik para React (Ver) // Librería que se instala y te ayuda con los formularios

HOC

React Context - repasar por las dudas... sería como un estado global??
	Creo que lo que esta en value de:
		render(){
			return(
				<RoomContext.Provider 
					value
	es lo que se hace público.


Cuando hace scroll para abajo, que "haga algo" (cargue más elementos, actualice los items del listado que aparecen en la pantalla, para que no se carguen todos de una)

¿Cuando le pongo un "const" a las arrow functions?


************************************************************************

React Routing
	404 lo tengo hecho en el proyecto de hotel-reservation

************************************************************************

coursework.vschool.io !! Ver!
medium.freecodecamp.org

Mapping components
	1:40:00

Metodos de ciclo de vida de un componente
	2:48:00
		Pone una URL para chequear

Método Fetch
	3:27:29
		Pone una URL para chequear
	3:28:03
		Artículo sobre Promises

https://swapi.co // Api gratuita para sacar datos!

Presention and Smart components
	4:26:51
		Pone url

Temas interesantes de React - Recomendaciones finales:
	5:00:00


02 - Instalar extensión de Chrome - React

03 - Me quede en ... no se... creo que 25 o 35

//////////////////////////////////////////////////////////////////////

Cursos Udemy

Para crear una nueva App, en la carpeta que queramos armar el proyecto:
	npx create-react-app [Nombre-Proyecto]
	Entramos a la carpeta, y con "yarn start" se crea un servidor para la ejecución de esa app

Los componentes que voy creando tengo que almacenarlos en la carpeta /src/components (por convención)

Para iniciar mi servidor local: yarn start (se inicia en :3000)

Instalación de librerías con npm install o yarn add
	yarn add [nombre] // es lo mismo que npm install

		*weathericons
		*prop-types (Es para la validación del tipo de dato)
-->