import React from 'react';

import { Route, Switch } from 'react-router-dom'

import { SesionProvider } from './contexts/SesionContext'
import { MenuProvider } from './contexts/MenuContext'
import Header from './components/Header/index'
import Body from './components/Body/index'

import Home from './pages/Home'
import Login from './pages/Login'
import Contacto from './pages/Contacto'
import Error from './pages/Error'

import './App.css';

function App() {
	return (
		<SesionProvider>
			<MenuProvider>
				<Header />
			</MenuProvider>
			<Body>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login/" component={Login} />
					<Route exact path="/contacto/" component={Contacto} />
					
					<Route component={Error} />
				</Switch>
			</Body>		
		</SesionProvider>
	);
}

export default App;
/**/