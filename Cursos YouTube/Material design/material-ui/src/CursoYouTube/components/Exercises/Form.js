import React, { Component } from 'react'

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default class extends Component {
	state = this.getInitState()

	getInitState(){
		const { exercise } = this.props

		return exercise ? exercise : {
			title: '',
			description: '',
			muscles: ''
		}
	}

	componentWillReceiveProps({ exercise }){
		this.setState({
			...exercise
		})
	}

	handleChange = name => ({ target: { value } }) => {
		this.setState({
			[name]: value
		})
	}

	handleSubmit = () => {
		const { exercise } = this.state
		this.props.onSubmit({
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
		const { title, description, muscles } = this.state
		const { muscles: categories } = this.props
		return (
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
				<br />
				<Button style={{marginTop:8}} color="primary" variant="contained" onClick={this.handleSubmit}>
					{
						this.props.exercise ? "Update" : "Create"

					}
				</Button>
			</form>
		)
	}
}