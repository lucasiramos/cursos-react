import React from 'react'

import Header from '../components/Header'
import Body from '../components/Body'
import Typography from '@material-ui/core/Typography';

const Button = () => {
	return (
		<div>
			<Header />
			<Body>
				<Typography variant="h3" gutterBottom>
					Sección botones
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

export default Button