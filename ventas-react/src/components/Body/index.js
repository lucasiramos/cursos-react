import React from 'react'

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import './Body.css'

const Body = (props) => {
	return (
		<Container maxWidth="md" className="body">
			<Paper elevation={2} className="paper">
				{props.children}
			</Paper>
		</Container>
	)
}

export default Body