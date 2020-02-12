import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const MenuHeader = withStyles({
	indicator: {
		backgroundColor: '#58DC00',
	},
})(Tabs);

export const ItemMenu = withStyles(theme => ({
  root: {
	color: '#FFFFFF',
	'&:hover': {
	  color: '#FFFFFF',
	  opacity: 1,
	},
	'&$selected': {
	  color: '#FFFFFF',
	  fontWeight: theme.typography.fontWeightMedium,
	},
  },
  selected: {},
}))(props => <Tab {...props} />);