 import React from 'react';

import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Form from './Form'

const styles = {
	Paper: {
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
		height: 400,
		overflowY: 'auto'
	}
}

const Exercises = ({ muscles, exercises, category, onSelect, exercise, editMode, exercise: {id, title = 'Welcome!', description = 'Please select an exercise from the list on the left'}, onDelete, onSelectEdit, onEdit }) => {
	return (
		<Grid container>
			<Grid item sm>
				<Paper style={{...styles.Paper, marginRight: '10px'}}>
					{
						exercises.map(
							([group, exercises]) => 
							!category || category === group
								? <React.Fragment key={group}>
									<Typography variant="h6" style={{textTransform: 'capitalize'}}>
										{group}
									</Typography>
									<List component="ul" aria-label="secondary mailbox folders">
										{
											exercises.map(({ title, id }) =>
												<ListItem key={id} button onClick={() => onSelect(id)}>
													<ListItemText 
														primary={title} />
													<ListItemSecondaryAction>
														<IconButton onClick={() => onSelectEdit(id)}>
															<EditIcon />
														</IconButton>
														<IconButton onClick={() => onDelete(id)}>
															<DeleteIcon />
														</IconButton>
													</ListItemSecondaryAction>
												</ListItem>		
											)
										}
									</List>
								</React.Fragment>
								: null
						)
					}
				</Paper>
			</Grid>
			<Grid item sm>
				<Paper style={{...styles.Paper, marginLeft: '10px'}}>
					{editMode
						? 
							<Form
								exercise={exercise}
								muscles={muscles}
								onSubmit={onEdit} >	
							</Form>
						:
							<>
								<Typography variant="h4">
									{title}
								</Typography>
								<Typography variant="subtitle1" style={{marginTop: '20px'}}>
									{description}
								</Typography>
							</>
					}
				</Paper>
			</Grid>
		</Grid>
	)
}

export default Exercises