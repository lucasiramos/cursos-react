import React, { useState, useEffect, useContext } from 'react'

import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import grey from '@material-ui/core/colors/grey';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import TraeItemsMenu from './itemsMenu'
import TraeIconoMenu from './itemsMenu/TraeIconoMenu'
import { MenuHeader, ItemMenu } from './formatoTabs'

import { MenuContext } from '../../contexts/MenuContext'

import './Header.css'

const estilosMenuMobile = makeStyles({
	list: {
		width: 250,
	}
});

const Header = () => {
	const [esMobile, setEsMobile] = useState(false)
	const [menuAbierto, setMenuAbierto] = useState(false);
	const [menuElegido,setMenuElegido] = useContext(MenuContext)

	// Tabs
	const [tab, setTab] = useState(menuElegido);
	const handleTabChange = (event, newValue) => {
		console.log("Nuevo valor: ")
		console.log(newValue)
		setTab(newValue);
	};

	const handleClickMenuMobile = indice => {
		setTab(indice);
	}
	
	const classes = estilosMenuMobile();
	const toggleDrawer = menuAbierto => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setMenuAbierto(menuAbierto);
	};

	const itemsMenu = TraeItemsMenu()

	const ChequearAnchoPantalla = () =>{
		setEsMobile(window.innerWidth < itemsMenu.ancho);
	}

	const menuLateral = () => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{itemsMenu.items.map((item,index) => (
					<ListItem button key={item.id} component={Link} to={item.url} onClick={(event) => handleClickMenuMobile(index)}>
						<ListItemIcon>{TraeIconoMenu(item.icono)}</ListItemIcon>
						<ListItemText primary={item.texto} />
					</ListItem>
				))}
			</List>
		</div>
	);

	useEffect(() => {
		window.addEventListener("resize", ChequearAnchoPantalla);
		ChequearAnchoPantalla()
	}, []);

	return(
		<div className="header">
			<div className="logo">
				<img src={"./imagenes/header/logo.png"} alt="logo"/>
			</div>
			<div className="menu">
				{
					esMobile ?
						(<div className="MenuMobile">
							<IconButton aria-label="menu" onClick={toggleDrawer(true)}>
								<MenuIcon style={{ color: grey[50] }}/>
							</IconButton>
							<Drawer open={menuAbierto} onClose={toggleDrawer(false)}>
								{menuLateral()}
							</Drawer>
						</div>)
					:
						(<div className="MenuDesktop">
							<MenuHeader value={tab} onChange={handleTabChange}>
								{
									itemsMenu.items.map(item =>
										<ItemMenu component={Link} label={item.texto} to={item.url} key={item.id} />		
									)
								}
							</MenuHeader>
						</div>)
				}
			</div>
		</div>
	)
}

export default Header

/*

*/