import React, {useState} from 'react'

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import grey from '@material-ui/core/colors/grey';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import { MenuHeader, ItemMenu } from './formatoTabs'
// import 

const useStyles = makeStyles({
	list: {
		width: 250,
	}
});

const MenuDeslogueado = () => {
	// Tabs
	const [tab, setTab] = useState(0);
	const handleTabChange = (event, newValue) => {
		setTab(newValue);
	};

	// Menú lateral
	const [menuAbierto, setMenuAbierto] = useState(false);
	const toggleDrawer = (side, estaAbierto) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setMenuAbierto(estaAbierto);
	};

	return (
		<div className="MenuDesktop">
			<MenuHeader value={tab} onChange={handleTabChange}>
				<ItemMenu label="¿Qué es esto???" />
				<ItemMenu label="¡Quiero jugar!" />
				<ItemMenu label="Contacto" />
			</MenuHeader>
		</div>
	)
}

export default MenuDeslogueado