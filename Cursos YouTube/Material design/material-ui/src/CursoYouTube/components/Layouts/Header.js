import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import CreateDialog from '../Exercises/Dialogs/Create'

const Header = ({ muscles, onExerciseCreate }) => {
	return(
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" style={{flex: 1 }}>
					Exercises
				</Typography>

				<CreateDialog 
					muscles={muscles}
					onCreate={onExerciseCreate} />
			</Toolbar>
		</AppBar>
	)
}

export default Header