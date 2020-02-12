import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Select from '@material-ui/core/Select';

import Form from './Form'

export default class extends Component {
	state = {
		open: false
	}

	handleToggle = () => {
		this.setState({
			open: !this.state.open
		})
	}

	render(){
		const { open } = this.state
		const { muscles, onCreate } = this.props

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
						<Form
							muscles={muscles}
							onSubmit={onCreate} />
					</DialogContent>
				</Dialog>
			</>
		)
	}
	
}