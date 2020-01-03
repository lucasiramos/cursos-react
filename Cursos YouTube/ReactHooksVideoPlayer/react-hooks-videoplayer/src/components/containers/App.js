import React from 'react';

import WbnPlayer from './WbnPlayer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyle from './../styles/GlobalStyle'

const App = () => (
	// Ojo! En producción tengo que ponerle	un basename si es que corre dentro de una subcarpeta:
	// <BrowserRouter basename="/mi_app_react/"> // en caso que corra en http://misitio.com/mi_app_react
	<BrowserRouter>
		<>
			<Switch>
				<Route exact path="/" component={WbnPlayer} />
				<Route exact path="/:activeVideo" component={WbnPlayer} />
			</Switch>
			<GlobalStyle />
		</>
	</BrowserRouter>
)

export default App;
