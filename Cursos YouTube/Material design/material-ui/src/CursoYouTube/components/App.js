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
		return Object.entries(this.state.exercises.reduce((exercises, exercise) => 
			{
				const { muscles } = exercise

				exercises[muscles] = exercises[muscles] 
					? [...exercises[muscles], exercise]
					: [exercise]

				return exercises
			}, {})
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

	render(){
		const exercises = this.getExercisesByMuscle(),
		{ category, exercise } = this.state
		return(
			<>
				<Header
					muscles={muscles}
					onExerciseCreate={this.handleExerciseCreate} />
				<Exercises
					exercise={exercise}
					category={category}
					exercises={exercises}
					onSelect={this.handleExerciseSelected} />
				<Footer 
					muscles={muscles} 
					onSelect={this.handleCategorySelected}
					category={category} />
			</>
		)
	}
}

export default App