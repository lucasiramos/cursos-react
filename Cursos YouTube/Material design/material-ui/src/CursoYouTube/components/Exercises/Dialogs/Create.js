import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default class extends Component {

	state = {
		open: false,
		exercise: {
			title: '',
			description: '',
			muscles: ''
		}
	}

	handleToggle = () => {
		this.setState({
			open: !this.state.open
		})
	}

	handleChange = name => ({ target: { value } }) => {
		this.setState({
			exercise: {
				...this.state.exercise,
				[name]: value
			}
		})
	}

	handleSubmit = () => {
		const { exercise } = this.state
		this.props.onCreate({
			...exercise,
			id: exercise.title.toLocaleLowerCase().replace(/  /g,'-')
		})

		this.setState({
			open: false,
			exercise: {
				title: '',
				description: '',
				muscles: ''
			}
		})
	}

	render(){
		const { open, exercise: { title, description, muscles } } = this.state,
			{ muscles: categories } = this.props

		return (
			<>
				<Button color="primary" onClick={this.handleToggle}>
					<Fab size="small" aria-label="add">
						<AddIcon />
					</Fab>
				</Button>
				<Dialog open={open} onClose={this.handleToggle}>
					<DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please fill a form below
						</DialogContentText>
						<form>
							<TextField style={{width:300}}
								label="Title"
								onChange={this.handleChange('title')}
								value={title} />
							<br />
							<FormControl>
								<InputLabel id="demo-simple-select-label">Muscles</InputLabel>
								<Select style={{width:300}}
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={muscles}
									onChange={this.handleChange('muscles')}>
									{
										categories.map(category =>
											<MenuItem key={category} value={category}>{category}</MenuItem>
										)
									}
								</Select>
							</FormControl>
							<br />
							<TextField
								style={{width:300}}
								label="Description"
								multiline
								rows="4"
								onChange={this.handleChange('description')}
								value={description} />
						</form>
					</DialogContent>
					<DialogActions>
						<Button color="primary" variant="contained" onClick={this.handleSubmit}>
							Create
						</Button>
					</DialogActions>
				</Dialog>
			</>
		)
	}
	
}