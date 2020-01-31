import React from 'react'

import Typography from '@material-ui/core/Typography';

import './Header.css'

const Header = () => {
	return (
		<div className="header">
			<div className="logoMui">
				<img src="https://material-ui.com/static/logo_raw.svg" />
			</div>
			<Typography variant="h1">
				Material Design
			</Typography>
			<Typography variant="h4">
				Materiales para la construcción
			</Typography>
			<Typography variant="subtitle2">
				(de páginas con React)
			</Typography>
		</div>
	)
}

export default Header