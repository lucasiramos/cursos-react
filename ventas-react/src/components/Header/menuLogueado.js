import React, {useState} from 'react'

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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { MenuHeader, ItemMenu } from './formatoTabs'

const useStyles = makeStyles({
	list: {
		width: 250,
	}
});

const MenuLogueado = () => {
	const [tab, setTab] = useState(0);
	const [menuAbierto, setMenuAbierto] = useState(false);

	const handleTabChange = (event, newValue) => {
		setTab(newValue);
	};

	const classes = useStyles();

	const toggleDrawer = (side, estaAbierto) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setMenuAbierto(estaAbierto);
	};

	const sideList = side => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
					<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
					<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<>
			<div className="MenuDesktop">
				<MenuHeader value={tab} onChange={handleTabChange}>
					<ItemMenu label="Estas logueado" />
					<ItemMenu label="Ya no te quiero" />
					<ItemMenu label="A A A" />
				</MenuHeader>
			</div>
			<div className="MenuMobile">
				<IconButton aria-label="delete" onClick={toggleDrawer('left', true)}>
					<MenuIcon style={{ color: grey[50] }}/>
				</IconButton>
				<Drawer open={menuAbierto} onClose={toggleDrawer('left', false)}>
					{sideList('left')}
				</Drawer>
			</div>
		</>
	)
}

export default MenuLogueado

/**/