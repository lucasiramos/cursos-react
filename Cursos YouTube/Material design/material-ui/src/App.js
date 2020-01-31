import React from 'react';

import Home from './pages/Home'
import pButton from './pages/Button'
import Error from './pages/Error'

import { Route, Switch } from 'react-router-dom'

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/button/" component={pButton} />

				<Route component={Error} />
			</Switch>
		</div>
	);
}

export default App;

/*<Button variant="contained" color="primary">
				¡Hola Mundo!
			</Button>
			<Button variant="contained" color="primary">
				Soy otro boton
			</Button>
			<p>Esto es un texto común</p>
			<Typography variant="body1" gutterBottom>
				Y esto con Typography
			</Typography>
			<Typography variant="body1" gutterBottom>
				Te genera un párrafo &lt;p&gt;. Si tiene el atributo 'gutterBottom' te pone un margin-bottom de 0.35em
			</Typography>
			<Typography variant="h1" component="h2" gutterBottom>
				h1. Heading
			</Typography>
			<Typography variant="h2" gutterBottom>
				h2. Heading
			</Typography>
			<Typography variant="h3" gutterBottom>
				h3. Heading
			</Typography>
			<Typography variant="h4" gutterBottom>
				h4. Heading
			</Typography>
			<Typography variant="h5" gutterBottom>
				h5. Heading
			</Typography>
			<Typography variant="h6" gutterBottom>
				h6. Heading
			</Typography>
			<Typography variant="subtitle1" gutterBottom>
				subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
			</Typography>
			<Typography variant="subtitle2" gutterBottom>
				subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
			</Typography>*/