import React from 'react'

import InfoIcon from '@material-ui/icons/Info';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const TraeIconoMenu = icono => {
	switch(icono){
		case "info":
			return (<InfoIcon />)
			break;
		case "jugar":
			return (<SportsEsportsIcon />)
			break;
		case "contacto":
			return (<ContactMailIcon />)
			break;
	}
}

export default TraeIconoMenu