import React from 'react'

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Body from '../components/Body'
import Typography from '@material-ui/core/Typography';

const Home = () => {
	return (
		<div>
			<Header />
			<Body>
				<Typography variant="h3" gutterBottom>
					¡Bienvenido!
				</Typography>
				<Typography variant="body1" gutterBottom>
					Seleccione a continuación un elemento para ver las implementaciones de Material Design en React:
				</Typography>
					<Button variant="contained" href="button" color="primary">
						Button
					</Button>
			</Body>
		</div>
	)
}

export default Home