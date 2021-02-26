import {useReducer, useState} from 'react'

import Todo from './reducer/Todo'

function reducer(todos, action){
	switch(action.type){
		case ACTIONS.ADD_TODO:
			return [...todos, newTodo(action.payload.name)]
			break;

		case ACTIONS.TOGGLE_TODO:
			return todos.map(todo => {
				if(todo.id === action.payload.id){
					return { ...todo, completed: !todo.completed }
				}
				return todo
			})
			break;

		case ACTIONS.DELETE_TODO:
			return todos.filter(todo => todo.id !== action.payload.id)
			break;

		default:
			return todos
	}
}

function newTodo(name){
	return {id: Date.now(), name: name, completed: false}
}

export const ACTIONS = {
	ADD_TODO: 'add-todo',
	TOGGLE_TODO: 'toggle-todo'
}


function UseReducerComplejo(){
	const [todos, dispatch] = useReducer(reducer, [])
	const [name, setName] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		// Payload son los parámetros que le paso al reducer
		// ----------------------------------↓
		dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name}})
		setName('')
	}

	console.log(todos)

	return (
		<>
			<h1>Use Reducer complejo, ponele...</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" value={name} onChange={e => setName(e.target.value)} />
			</form>
			{todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch} />)}
			<hr/>
		</>
	)
}

export default UseReducerComplejo