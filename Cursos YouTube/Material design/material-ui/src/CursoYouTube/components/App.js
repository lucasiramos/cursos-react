import React, { Component } from 'react';

import { Header, Footer } from './Layouts'
import Exercises from './Exercises'

import { muscles, exercises } from './../store.js'

class App extends Component {
	state = {
		exercises,
		exercise: {}
	}

	getExercisesByMuscle(){
		const initExercises = muscles.reduce((exercises, category) => ({
			...exercises,
			[category]: []
		}), {})

		console.log(muscles, initExercises)

		return Object.entries(this.state.exercises.reduce((exercises, exercise) => 
			{
				const { muscles } = exercise

				exercises[muscles] = [...exercises[muscles], exercise] 

				return exercises
			}, initExercises)
		)
	}

	handleCategorySelected = category => {
		this.setState({
			category
		})
	}

	handleExerciseSelected = id => {
		this.setState(({exercises}) => ({
			exercise: exercises.find(ex => ex.id === id)
		}))
	}

	handleExerciseCreate = exercise => {
		this.setState(({ exercises }) => ({
			exercises: [
				...exercises,
				exercise
			]
		}))
	}

	handleExerciseDelete = id => {
		this.setState(({ exercises }) => ({
			exercises: exercises.filter(ex => ex.id !== id)
		}))
	}

	handleExerciseSelectEdit = id => {
		this.setState(({exercises}) => ({
			exercise: exercises.find(ex => ex.id === id),
			editMode: true
		}))
	}

	handleExerciseEdit = exercise => {
		this.setState(({ exercises }) => ({
			exercises: [
				...exercises.filter(ex => ex.id !== exercises.id),
				exercise
			]
		}))
	}

	render(){
		const exercises = this.getExercisesByMuscle(),
		{ category, exercise, editMode } = this.state
		return(
			<>
				<Header
					muscles={muscles}
					onExerciseCreate={this.handleExerciseCreate} />
				<Exercises
					exercise={exercise}
					category={category}
					exercises={exercises}
					editMode={editMode}
					muscles={muscles}
					onSelect={this.handleExerciseSelected}
					onDelete={this.handleExerciseDelete}
					onSelectEdit={this.handleExerciseSelectEdit}
					onEdit={this.handleExerciseEdit} />
				<Footer 
					muscles={muscles} 
					onSelect={this.handleCategorySelected}
					category={category} />
			</>
		)
	}
}

export default App